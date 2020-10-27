import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';

import api from '../../services/api';

import {AppointmentsList, AppointmentsListTitle, Container} from './styles';

export interface IDoctor {
  id: number;
  nome: string;
  email: string;
}

export interface IAppointments {
  id: number;
  medico: IDoctor;
  paciente: string;
  dataConsulta: string;
  observacao: string;
}

const Dashboard: React.FC = () => {
  const [appointments, setAppointments] = useState<IAppointments[]>([]);

  useEffect(() => {
    const getAppointments = async () => {
      try {
        const response = await api.get('consultas');

        setAppointments(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    getAppointments();
  }, []);

  return (
    <Container>
      <AppointmentsList
        data={appointments}
        ListHeaderComponent={
          <AppointmentsListTitle>Consultas</AppointmentsListTitle>
        }
        renderItem={({item: appointment}) => (
          <Text>Pacientes: {appointment.paciente}</Text>
        )}
      />
    </Container>
  );
};

export default Dashboard;
