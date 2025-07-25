const TableHeading = ({
  heading,
  colSpan,
}: {
  heading: string;
  colSpan: number;
}) => {
  return (
    <>
      <td
        colSpan={colSpan}
        style={{
          fontSize: '2rem',
          textAlign: 'center',
          fontWeight: 600,
          backgroundColor: '#63C4EF',
          color: '#343a40',
          border: '1px solid black',
          textTransform: 'uppercase',
        }}
      >
        {heading}
      </td>
    </>
  );
};

export default TableHeading;
