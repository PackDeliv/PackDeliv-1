import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { CadastroPage } from "../pages/cadastro/cadastro";
import { EscolhaCadastroPage } from "../pages/escolha-cadastro/escolha-cadastro";
import { UsuarioProvider } from '../providers/usuario/usuario';
import { CadastroEntregadorPage } from "../pages/cadastro-entregador/cadastro-entregador";
import { CadastroVeiculoPage } from "../pages/cadastro-veiculo/cadastro-veiculo";
import { RemoteProvider } from '../providers/remote/remote';
import { ListaDeEntregasPage } from "../pages/lista-de-entregas/lista-de-entregas";
import { MonitorarEntregasPage } from "../pages/monitorar-entregas/monitorar-entregas";
import { PerfilPage } from "../pages/perfil/perfil";
import { SolicitarEntregasPage } from "../pages/solicitar-entregas/solicitar-entregas";
import { RecuperarSenhaPage } from '../pages/recuperar-senha/recuperar-senha';
import { Geolocation } from "@ionic-native/geolocation";
import { GoogleMaps } from "@ionic-native/google-maps";
import { EditarPerfilPage } from '../pages/editar-perfil/editar-perfil';
import { EmailComposer } from "@ionic-native/email-composer";
import { SessionProvider } from '../providers/session/session';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CadastroPage,
    EscolhaCadastroPage,
    CadastroEntregadorPage,
    CadastroVeiculoPage,
    ListaDeEntregasPage,
    MonitorarEntregasPage,
    PerfilPage,
    SolicitarEntregasPage,
    RecuperarSenhaPage,
    EditarPerfilPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CadastroPage,
    EscolhaCadastroPage,
    CadastroEntregadorPage,
    CadastroVeiculoPage,
    ListaDeEntregasPage,
    MonitorarEntregasPage,
    PerfilPage,
    SolicitarEntregasPage,
    RecuperarSenhaPage,
    EditarPerfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioProvider,
    RemoteProvider,
    Geolocation,
    GoogleMaps,
    EmailComposer,
    SessionProvider
  ]
})
export class AppModule {}
