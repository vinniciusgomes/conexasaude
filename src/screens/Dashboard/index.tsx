import {useNavigation} from '@react-navigation/native';
import {format} from 'date-fns';
import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {RectButton, TouchableOpacity} from 'react-native-gesture-handler';
import {useAuth} from '../../hooks/auth';

import api from '../../services/api';

import {
  AppointmentItem,
  AppointmentItemContainer,
  AppointmentsList,
  AppointmentsListTitle,
  Container,
  DoctorName,
  PatientName,
  AppointmentDate,
  SignOutButton,
  SignOutButtonText,
} from './styles';

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
  const {signOut} = useAuth();
  const {navigate} = useNavigation();

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
        keyExtractor={(item) => item.id}
        renderItem={({item: appointment}) => (
          <AppointmentItem
            onPress={() =>
              navigate('AppointmentDetails', {appointmentId: appointment.id})}
          >
            <AppointmentItemContainer>
              <PatientName>{appointment.paciente}</PatientName>
              <AppointmentDate>
                {format(new Date(appointment.dataConsulta), 'HH:mm - dd/MM/yy')}
              </AppointmentDate>
            </AppointmentItemContainer>
            <DoctorName>{appointment.medico.nome}</DoctorName>
          </AppointmentItem>
        )}
      />
      <SignOutButton>
        <TouchableOpacity onPress={() => signOut()}>
          <SignOutButtonText>Sair</SignOutButtonText>
        </TouchableOpacity>
      </SignOutButton>
    </Container>
  );
};

export default Dashboard;
