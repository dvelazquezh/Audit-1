import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Dashboard from 'pages/Dashboard';
import Settings from 'pages/Settings';
import Tables from 'pages/Tables';
import Maps from 'pages/Maps';
import Footer from 'components/Footer';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import { CreateTemplate } from 'pages/audit/CreateTemplate';
import { Audit } from 'pages/audit/Audit';
import { Register } from 'pages/audit/Register';
import { Usuarios } from 'pages/audit/Usuarios';
import { Sucursales } from 'pages/audit/Sucursales';
import { Reportes } from 'pages/audit/Reportes';



function App() {
    return (
        <>
            <Sidebar />
            <div className="md:ml-64">
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/settings" component={Settings} />
                    <Route exact path="/tables" component={Tables} />
                    <Route exact path="/maps" component={Maps} />
                    <Route exact path="/createTemplate" component={CreateTemplate} />
                    <Route exact path="/audits" component={Audit} />
                    <Route exact path="/users" component={Usuarios} />
                    <Route exact path="/branch_office" component={Sucursales} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/reports" component={Reportes} />
                    <Redirect from="*" to="/" />
                </Switch>
                <Footer />
            </div>
        </>
    );
}

export default App;
