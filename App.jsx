import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';
import { GlobalStyles } from './src/admin-files/styles';
import RecentExpenses from './src/screens/RecentExpenses';
import AllExpenses from './src/screens/AllExpenses';
import ManageExpense from './src/screens/ManageExpense';
import IconButton from './src/components/UI/IconButton';
import ExpensesContextProvider from './store/expenses-context';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  const setDateStyle = () => {
    console.log('set date style from here');
  };
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerShadowVisible: false,
        headerTintColor: 'white',
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
          borderTopWidth: 1,
          borderTopColor: GlobalStyles.colors.primary200,
        },
        tabBarActiveTintColor: GlobalStyles.colors.primary50,
        headerRight: ({ tintColor }) => {
          return (
            <IconButton
              icon='add'
              size={40}
              color={tintColor}
              whenPressed={() => {
                navigation.navigate('Manage Expense');
              }}
            />
          );
        },
      })}
    >
      <BottomTabs.Screen
        name='Recent Expenses'
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='hourglass' size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name='All Expenses'
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='calendar' size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={({ navigation }) => ({
              headerStyle: {
                backgroundColor: GlobalStyles.colors.primary500,
              },
              headerTintColor: 'white',
              headerLeft: ({ tintColor }) => {
                return (
                  <>
                    <View
                      style={{ flexDirection: 'column', alignItems: 'center' }}
                    >
                      <IconButton
                        icon='close-circle'
                        size={30}
                        color={tintColor}
                        whenPressed={() => {
                          navigation.goBack();
                        }}
                      />
                    </View>
                  </>
                );
              },
            })}
          >
            <Stack.Screen
              name='Expenses Overview'
              component={ExpensesOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Manage Expense'
              component={ManageExpense}
              options={{ presentation: 'modal' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}
