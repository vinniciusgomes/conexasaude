import {useRoute} from '@react-navigation/native';
import {format} from 'date-fns';
import React, {useEffect, useState} from 'react';

import api from '../../services/api';
import {IDoctor} from '../Dashboard';

import {
  AppointmentContainer,
  AppointmentItem,
  AppointmentItemTitle,
  Container,
  Content,
  PageTitle,
  AppointmentItemText,
  Header,
} from './styles';

interface IRouteParams {
  appointmentId: string;
}

interface IAppointment {
  id: number;
  medico: IDoctor;
  paciente: string;
  dataConsulta: string;
  observacao: string;
}

const AppointmentDetails: React.FC = () => {
  const [appointmentDetail, setAppointmentDetail] = useState<
    IAppointment | undefined
  >(undefined);
  const route = useRoute();
  const {appointmentId} = route.params as IRouteParams;

  useEffect(() => {
    const getAppointmentDetails = async () => {
      try {
        const response = await api.get(`consulta/${appointmentId}`);

        setAppointmentDetail(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    getAppointmentDetails();
  }, [appointmentId]);

  return (
    <Container>
      {appointmentDetail && (
        <Content>
          <Header>
            <PageTitle>Detalhes da consulta</PageTitle>
          </Header>
          <AppointmentContainer>
            <AppointmentItem>
              <AppointmentItemTitle>Paciente:</AppointmentItemTitle>
              <AppointmentItemText>
                {appointmentDetail.paciente}
              </AppointmentItemText>
            </AppointmentItem>
            <AppointmentItem>
              <AppointmentItemTitle>Médico:</AppointmentItemTitle>
              <AppointmentItemText>
                {appointmentDetail.medico.nome}
              </AppointmentItemText>
            </AppointmentItem>
            <AppointmentItem>
              <AppointmentItemTitle>Data da consulta:</AppointmentItemTitle>
              <AppointmentItemText>
                {format(new Date(appointmentDetail.dataConsulta), 'dd/MM/yyyy')}
              </AppointmentItemText>
            </AppointmentItem>
            <AppointmentItem>
              <AppointmentItemTitle>Hora da consulta:</AppointmentItemTitle>
              <AppointmentItemText>
                {format(new Date(appointmentDetail.dataConsulta), 'hh:mm')}
              </AppointmentItemText>
            </AppointmentItem>
            <AppointmentItem noBorder>
              <AppointmentItemTitle>Observação:</AppointmentItemTitle>
              <AppointmentItemText>
                {appointmentDetail.observacao}
              </AppointmentItemText>
            </AppointmentItem>
          </AppointmentContainer>
        </Content>
      )}
    </Container>
  );
};

export default AppointmentDetails;
