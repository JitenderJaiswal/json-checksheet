import moment from "moment";
import { useLocation, useNavigate } from "react-router-dom";
import { DatePicker, DateView } from "@mui/x-date-pickers";
import queryString from "query-string";
import { useQuery } from "../../hooks/UseQuery";
import { useEffect, useState } from "react";

interface IProps {
  label: string;
  views?: readonly DateView[];
  format?: string;
}

const PersistedDatePicker = ({ label, views, format }: IProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  // our URL param
  const dateParam = useQuery("date");
  const [internalDate, setInternalDate] = useState<moment.Moment | null>(null);

  // 1) run once on mount to seed date/startDate/endDate if missing
  useEffect(() => {
    if (!dateParam) {
      const now = new Date();
      const parsed = queryString.parse(location.search);

      parsed.date = now.toISOString();
      // financial-year logic
      const fyStart =
        moment(now).month() >= 3
          ? moment(now).month(3).date(1).startOf("day")
          : moment(now).subtract(1, "year").month(3).date(1).startOf("day");
      parsed.startDate = fyStart.toISOString();
      parsed.endDate = fyStart
        .add(1, "year")
        .subtract(1, "day")
        .endOf("day")
        .toISOString();
      parsed.dateRangeType = "financialYear";

      const qs = queryString.stringify(parsed);
      // REPLACE so we don't push a bogus entry before the user even did anything
      navigate(`${location.pathname}?${qs}`, { replace: true });
      setInternalDate(moment(now));
    }
  }, []); // ← only once

  // 2) whenever the URL date param really changes, sync our picker
  useEffect(() => {
    if (dateParam) {
      const d = new Date(dateParam);
      setInternalDate(moment(isNaN(d.getTime()) ? new Date() : d));
    }
  }, [dateParam]);

  // 3) on user pick → push a new history entry
  const handleDate = (newDate: moment.Moment | null) => {
    const parsed = queryString.parse(location.search);
    if (newDate) {
      parsed.date = newDate.toDate().toISOString();

      // if only year view, recompute financial FY…
      if (views?.length === 1 && views[0] === "year") {
        const selYear = newDate.year();
        const nowMon = new Date().getMonth();
        const start =
          nowMon < 3 && selYear === moment().year()
            ? moment()
                .year(selYear - 1)
                .month(3)
                .date(1)
                .startOf("day")
            : moment().year(selYear).month(3).date(1).startOf("day");
        parsed.startDate = start.toISOString();
        parsed.endDate = start
          .add(1, "year")
          .subtract(1, "day")
          .endOf("day")
          .toISOString();
        parsed.dateRangeType = "financialYear";
      } else {
        delete parsed.startDate;
        delete parsed.endDate;
        delete parsed.dateRangeType;
      }
    }

    const qs = queryString.stringify(parsed);
    // PUSH a new entry
    navigate(`${location.pathname}?${qs}`);
    setInternalDate(newDate);
  };

  return (
    <DatePicker
      label={label}
      views={views}
      value={internalDate}
      onChange={handleDate}
      format={format}
    />
  );
};

export default PersistedDatePicker;
