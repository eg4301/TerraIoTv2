import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { v4 as uuid } from 'uuid';
import { Button, useTheme } from '@mui/material';
import { tokens } from '../../../theme';
import React from 'react';
import { useGoogleCalendarContext } from '../../../context/GoogleCalendarProvider';
import { eventTemplateService } from '../../../shared/services/event-template.service';
import { useAuthenticator } from '@aws-amplify/ui-react';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';

const addEventTemplateSchema = z.object({
  eventTemplates: z.array(
    z.object({
      eventName: z
        .string({
          required_error: 'Event Name is required',
        })
        .min(1, 'Event Name is required'),
      description: z
        .string({
          required_error: 'Description is required',
        })
        .min(1, 'Description is required'),
      duration: z
        .string({
          required_error: 'Duration is required',
        })
        .min(1, 'Duration is required'),
    })
  ),
});

export type EventTemplateInputType = z.infer<
  typeof addEventTemplateSchema
>['eventTemplates'][number];
export type EventTemplatesInputType = z.infer<typeof addEventTemplateSchema>;

export const AddNewEventForm = () => {
  const { user } = useAuthenticator();
  const { hideEventForm } = useGoogleCalendarContext();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { handleSubmit, register, control } = useForm<EventTemplatesInputType>({
    mode: 'onSubmit',
    resolver: zodResolver(addEventTemplateSchema),
    defaultValues: {
      eventTemplates: [
        {
          eventName: '',
          description: '',
          duration: '',
        },
      ],
    },
  });

  const { fields: eventTemplates, append } = useFieldArray({
    name: 'eventTemplates',
    control,
  });

  const handleEventEvent = () => {
    append({
      eventName: '',
      description: '',
      duration: '',
    });
  };

  const onSubmit = async (values: EventTemplatesInputType) => {
    try {
      const promises = values.eventTemplates.map((event) =>
        eventTemplateService.createEventTemplate({
          duration: +event.duration,
          eventName: event.eventName,
          description: event.description,
          id: uuid(),
          userId: user.userId,
        })
      );
      await Promise.all(promises);
      hideEventForm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
        gap={2}
      >
        <Typography variant="h3">Add New Event</Typography>
        <Button
          variant="outlined"
          color="info"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '4px',
          }}
          onClick={handleEventEvent}
        >
          <AddCircleOutlineOutlinedIcon color="info" />
          <span>Add Event</span>
        </Button>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {/* <Grid item xs={12} md={12}>
            <TextField
              required
              autoComplete="off"
              id="calendarId"
              name="calendarId"
              fullWidth
              label="Calendar Id"
              variant="outlined"
              onChange={handleOnChange}
              value={formState.calendarId}
              sx={{
                '& fieldset': {
                  border: `1px solid ${colors.grey[100]} !important`,
                },
                '& label': {
                  color: `${colors.grey[100]} !important`,
                },
              }}
            />
          </Grid> */}
          {eventTemplates.map((field, index) => (
            <React.Fragment>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  autoComplete="off"
                  id={`eventTemplates.${index}.eventName`}
                  fullWidth
                  label="Event Name"
                  variant="outlined"
                  {...register(`eventTemplates.${index}.eventName`)}
                  sx={{
                    '& fieldset': {
                      border: `1px solid ${colors.grey[100]} !important`,
                    },
                    '& label': {
                      color: `${colors.grey[100]} !important`,
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  autoComplete="off"
                  required
                  id={`eventTemplates.${index}.duration`}
                  fullWidth
                  type="number"
                  InputProps={{
                    inputProps: { min: 1 },
                  }}
                  label="Duration"
                  variant="outlined"
                  {...register(`eventTemplates.${index}.duration`)}
                  sx={{
                    '& fieldset': {
                      border: `1px solid ${colors.grey[100]} !important`,
                    },
                    '& label': {
                      color: `${colors.grey[100]} !important`,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  autoComplete="off"
                  id={`eventTemplates.${index}.description`}
                  fullWidth
                  label="Description"
                  {...register(`eventTemplates.${index}.description`)}
                  sx={{
                    '& fieldset': {
                      border: `1px solid ${colors.grey[100]} !important`,
                    },
                    '& label': {
                      color: `${colors.grey[100]} !important`,
                    },
                  }}
                />
              </Grid>
            </React.Fragment>
          ))}

          <Grid item xs={12}>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: colors.greenAccent[400],
                textTransform: 'unset',
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: colors.greenAccent[400],
                },
              }}
            >
              Submit
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={hideEventForm}
              fullWidth
              type="button"
              variant="contained"
              color="info"
            >
              Back
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};
