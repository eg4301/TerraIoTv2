import { Box, Button, useTheme } from '@mui/material';
import { DateRangePicker } from 'react-date-range';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import './date-range.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import React, { useState } from 'react';
import { format } from 'date-fns';
import { tokens } from '../../../theme';

type DateRangeInputProps = {
  onChange: (startDate: Date, endDate: Date) => void;
};

export const DateRangeInput: React.FC<DateRangeInputProps> = ({ onChange }) => {
  const [showDateRange, setShowDateRange] = useState(false);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleShowDateRange = () => {
    setShowDateRange((prev) => !prev);
  };

  const setCustomDateRange = (e) => {
    if (e.selection) {
      const { startDate, endDate, key } = e.selection;
      setDateRange({ startDate, endDate, key });
    }
  };

  const handleRefresh = () => {
    onChange(dateRange.startDate, dateRange.endDate);
    setShowDateRange(false);
  };

  return (
    <Box
      display="flex"
      gap={3}
      position="relative"
      top={'-10px'}
      bgcolor="216, 216, 216"
      p={0.6}
    >
      <Box
        display="flex"
        sx={{
          border: `1px solid ${colors.grey[100]}`,
          borderRadius: '10px',
        }}
      >
        <Box
          onClick={handleShowDateRange}
          display="flex"
          sx={{
            padding: '12px 10px',
            borderRight: `1px solid ${colors.grey[100]}`,
            cursor: 'pointer',
          }}
        >
          <DateRangeIcon
            sx={{
              color: colors.greenAccent[500],
            }}
          />
          <ArrowDropDown
            sx={{
              color: colors.grey[300],
            }}
          />
        </Box>
        <Box
          sx={{
            maxWidth: '100%',
            width: '240px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '7px',
            color: 'white',
          }}
        >
          <span>{format(dateRange.startDate, 'MMM d, yy')}</span>
          <span>&#10132;</span>
          <span>{format(dateRange.endDate, 'MMM d, yy')}</span>
        </Box>
      </Box>
      <Button
        onClick={handleRefresh}
        variant="contained"
        sx={{
          fontWeight: 600,
          fontSize: '18px',
          backgroundColor: colors.greenAccent[600],
          '&:hover': {
            backgroundColor: colors.greenAccent[700],
          },
        }}
      >
        Refresh
      </Button>
      {showDateRange && (
        <DateRangePicker
          editableDateInputs
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          className="date-range-wrapper"
          ranges={[dateRange]}
          dateDisplayFormat="yyyy-MM-dd"
          onChange={setCustomDateRange}
          rangeColors={[colors.greenAccent[400]]}
        />
      )}
    </Box>
  );
};
