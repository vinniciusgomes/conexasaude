import styled from 'styled-components/native';
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';

interface IAppointmentItem {
  noBorder?: boolean;
}

export const Container = styled.View`
  padding: 0 4px ${getBottomSpace() + 32}px;
  flex: 1;
`;

export const Content = styled.View`
  padding: 32px 16px 16px;
`;

export const Header = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 32px;
`;

export const PageTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const AppointmentContainer = styled.View`
  padding: 24px 16px;
  border-radius: 10px;
  background: #fff;
`;

export const AppointmentItem = styled.View<IAppointmentItem>`
  flex-direction: column;
  align-items: flex-start;

  padding-bottom: 16px;
  margin-bottom: 16px;

  border-bottom-width: ${(props) => (props.noBorder ? 0 : 1)};
  border-bottom-color: #dcdcdc;
`;

export const AppointmentItemTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const AppointmentItemText = styled.Text`
  font-size: 18px;
`;
