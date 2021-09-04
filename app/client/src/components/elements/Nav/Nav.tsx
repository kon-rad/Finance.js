import { AppBar, Toolbar, Typography } from '@material-ui/core'

export const Nav: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Finance.js</Typography>
      </Toolbar>
    </AppBar>
  )
}
