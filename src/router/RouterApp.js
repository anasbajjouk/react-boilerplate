import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Router, Switch, Route } from 'react-router-dom'
import history from '../common/history'
import { useDarkMode } from '../hooks/useDarkMode'

//Theme
import theme from '../common/theme'
import { GlobalStyles } from '../common/globalStyles'

//Components
import Page404 from '../pages/page-404/page-404.component'
import Dashboard from '../pages/Dashboard'
import NavBar from '../components/NavBar/NavBar'
import CountryDetails from '../pages/CountryDetails'

const RouterApp = () => {
  const [myTheme, themeToggler, mountedComponent] = useDarkMode()

  const themeMode =
    myTheme === 'light'
      ? { ...theme.lightTheme, ...theme }
      : { ...theme.darkTheme, ...theme }

  if (!mountedComponent) return <div />

  return (
    <ThemeProvider theme={themeMode}>
      <Router history={history}>
        <GlobalStyles />
        <NavBar themeToggler={themeToggler} theme={myTheme} />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/where-are-you/" component={Dashboard} />
          <Route exact path="/country/:name">
            <CountryDetails />
          </Route>
          <Route component={Page404} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default RouterApp