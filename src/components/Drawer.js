import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { View, SafeAreaView, TouchableOpacity, StyleSheet, Image, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/auth';
import AppGradient from '../components/AppGradient';

// TODO: Load routes from react-navigation props
const clientRoutes = [
  { name: 'EmployeesTemplate', label: 'Plantilla de Empleados' },
  { name: 'BusinessStatistics', label: 'Indicadores de Negocio' },
  { name: 'ClientKardex', label: 'Kardex' },
  { name: 'HelpCenter', label: 'Atención a Clientes' },
];

const employeeRoutes = [
  { name: 'Promos', label: 'Promociones' },
  { name: 'PersonalInfo', label: 'Información Personal' },
  { name: 'Información_laboral', label: 'Información Laboral' },
  { name: 'NominaScreen', label: 'Nómina' },
  { name: 'Kardex', label: 'Kardex' },
  // { name: 'CaseFile', label: 'Expediente' },
  { name: 'Others', label: 'Otros' },
  // { name: 'Benefits', label: 'Beneficios' },
  { name: 'HelpCenter', label: 'Atención a Clientes' },
];

const ListItem = ({ route, label, navigate }) => (
  <View>
    <TouchableOpacity style={styles.item} onPress={navigate(route)}>
      <Text size={22} color="#000000">{label}</Text>
      <Image source={require('../../assets/icons/arightCP.png')} style={styles.itemIcon} resizeMode="contain" />
    </TouchableOpacity>
    <AppGradient style={styles.divider} />
  </View>
);

class Drawer extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    const routes = this.props.isEmployee ? employeeRoutes : clientRoutes
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.component}>
            <View style={styles.routes}>
              <TouchableOpacity style={styles.close} onPress={this.props.navigation.closeDrawer}>
                <Image source={require('../../assets/icons/closecp.png')} style={styles.closeIcon} />
              </TouchableOpacity>
              {routes.map(route => (
                <ListItem
                  key={route.name}
                  route={route.name}
                  label={route.label}
                  navigate={this.navigateToScreen}
                />
              ))}
            </View>
            <TouchableOpacity onPress={this.props.logoutUser} style={{ marginTop: 40 }}>
              <Text size={22} color="#003B6A">Cerrar Sesión</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 24,
    paddingBottom: 28,
    paddingLeft: 22,
  },
  close: {
    marginBottom: 28,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 22,
    paddingRight: 20,
    borderBottomColor: '#C1C6D5',
    borderBottomWidth: 0.5,
  },
  itemIcon: {
    width: 18,
    height: 18
  },
  closeIcon: {
    width: 16,
    height: 16
  },
  divider: {
    height: 0.5,
  },
});

function mapStateToProps(state) {
  return {
    isClient: state.auth.isClient,
    isEmployee: state.auth.isEmployee,
  };
}

export default connect(mapStateToProps, {
  logoutUser,
})(Drawer);
