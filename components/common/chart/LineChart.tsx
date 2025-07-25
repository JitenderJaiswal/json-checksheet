import { useMemo, useState } from 'react';
import { LineChart as NewLineChart, BarChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Legend, Bar } from 'recharts';
import { createTheme, styled, alpha } from '@mui/material/styles';
import { ThemeProvider, Box, CircularProgress, Paper, Typography, Grid, Slider } from '@mui/material';
import dayjs from 'dayjs';

interface IProps {
  formattedData: any;
  graphType: any;
  isLoading: any;
  theme: any;
  startDate: any;
  heading: any;
  toolTipHeading: any;
  target?:any, 
  setTarget?:any;
}

interface GaugeChartProps {
  value: number;
  max?: number;
  size?: number;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
}

const GaugeChart: React.FC<GaugeChartProps> = ({ value, max = 100, size = 200, primaryColor, secondaryColor, backgroundColor }) => {
  const circumference = size * Math.PI;
  const progressValue = (value / max) * 100;
  const strokeDashoffset = circumference - (progressValue / 100) * circumference;

  return (
    <Box position="relative" width={size} height={size}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={secondaryColor} />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={(size - 10) / 2}
          fill="none"
          stroke={backgroundColor}
          strokeWidth="10"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={(size - 10) / 2}
          fill="none"
          stroke="url(#gaugeGradient)"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        style={{ transform: 'translate(-50%, -50%)' }}
        textAlign="center"
      >
        <Typography variant="h4" component="div" color={primaryColor} fontWeight="bold">
          {value.toFixed(1)}%
        </Typography>
      </Box>
    </Box>
  );
};

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: `0 10px 20px ${alpha(theme.palette.primary.main, 0.3)}`,
  },
}));

const LineChart = ({ formattedData, graphType, isLoading, theme, startDate , heading, toolTipHeading, target, setTarget}: IProps) => {

  const CustomTooltip = ({ active, payload, label,toolTipHeading }: any) => {
    if (active && payload && payload.length) {
      return (
        <Paper sx={{ p: 2, backdropFilter: 'blur(4px)' }}>
          <Typography variant="body2">{formatXAxisTick(label)}</Typography>
          <Typography variant="body1" color="primary" fontWeight="bold">
            {toolTipHeading} : {payload[0].value.toFixed(2)}%
          </Typography>
          {payload[0].value < target ? (
            <Typography variant="body2" color="success">
              Below Target: {(target - payload[0].value).toFixed(2)}%
            </Typography>
          ) : (
            <Typography variant="body2" color="error">
              Above Target: {(payload[0].value - target).toFixed(2)}%
            </Typography>
          )}
        </Paper>
      );
    }
    return null;
  };

  const formatXAxisTick = (tickItem: number) => {
    const date = dayjs(tickItem);
    if (graphType === 'daily') {
      return date.format('DD-MMM');
    } else if (graphType === 'monthly') {
      return date.format('MMM-YYYY');
    } else {
      return date.format('YYYY');
    }
  };

  const nonZeroOEEData = useMemo(() => formattedData.filter((item:any) => item.value !== 0&& item.value !== null), [formattedData]);

  const averageOEE = useMemo(() => {
    if (nonZeroOEEData.length === 0) return 0;
    const sum = nonZeroOEEData.reduce((acc:any, item:any) => acc + item.value, 0);
    return sum / nonZeroOEEData.length;
  }, [nonZeroOEEData]);

  const maxOEE = useMemo(() => {
    if (nonZeroOEEData.length === 0) return 0;
    return Math.max(...nonZeroOEEData.map((item:any) => item.value));
  }, [nonZeroOEEData]);

  const minOEE = useMemo(() => {
    if (nonZeroOEEData.length === 0) return 0;
    return Math.min(...nonZeroOEEData.map((item:any) => item.value));
  }, [nonZeroOEEData]);

  return (
    <>
    <Box sx={{ mt: 4, mb: 4, textAlign: 'center' }}>
      <Typography variant="h2" component="h1">
        {heading}
      </Typography>
    </Box>
    <StyledPaper sx={{ mt: 3, p: 4 }}>
    <Typography variant="h6" gutterBottom>
            Target: {target}%
          </Typography>
          <Slider
            value={target}
            onChange={(_, newValue) => setTarget(newValue as number)}
            aria-labelledby="target-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={100}
          />
        {isLoading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 400 }}>
            <CircularProgress />
          </Box>
        ) : (
          formattedData.length > 0 && (
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={formattedData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={alpha(theme.palette.text.secondary, 0.2)} />
                <XAxis
                  dataKey="date"
                  tickFormatter={formatXAxisTick}
                  stroke={theme.palette.text.secondary}
                  label={{ value: 'Time', position: 'insideBottomRight', offset: -10, fill: theme.palette.text.secondary }} />
                <YAxis
                  label={{ value: 'REJECTION %', angle: -90, position: 'insideLeft', fill: theme.palette.text.secondary }}
                  stroke={theme.palette.text.secondary} />
                <RechartsTooltip content={<CustomTooltip toolTipHeading={toolTipHeading}/>} />
                <Legend />
                {/* <Line
                  type="monotone"
                  dataKey="value"
                  name="Actual"
                  stroke={theme.palette.primary.main}
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                  dot={{ r: 4 }} // Adjust dot size as needed
                  connectNulls={true} // Connects lines even if there are null values
                /> */}
                   <Bar 
                    dataKey="value" 
                    name="Actual"
                    fill={theme.palette.primary.main}
                    stroke={theme.palette.primary.main}
                    strokeWidth={2}
                  />
              </BarChart>
            </ResponsiveContainer>
          )
        )}
      </StyledPaper>
      <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} md={4}>
            <StyledPaper>
              <Typography variant="h6" gutterBottom>
                Average Rejection
              </Typography>
              <GaugeChart 
                value={averageOEE} 
                primaryColor={theme.palette.primary.main}
                secondaryColor={theme.palette.secondary.main}
                backgroundColor={alpha(theme.palette.background.paper, 0.2)}
              />
            </StyledPaper>
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledPaper>
              <Typography variant="h6" gutterBottom>
                Max Rejection
              </Typography>
              <GaugeChart 
                value={maxOEE} 
                primaryColor={theme.palette.secondary.main}
                secondaryColor={theme.palette.primary.main}
                backgroundColor={alpha(theme.palette.background.paper, 0.2)}
              />
            </StyledPaper>
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledPaper>
              <Typography variant="h6" gutterBottom>
                Min Rejection
              </Typography>
              <GaugeChart 
                value={minOEE} 
                primaryColor={theme.palette.error.main}
                secondaryColor={theme.palette.error.light}
                backgroundColor={alpha(theme.palette.background.paper, 0.2)}
              />
            </StyledPaper>
          </Grid>
        </Grid>
      </>
  );
};

export default LineChart;
