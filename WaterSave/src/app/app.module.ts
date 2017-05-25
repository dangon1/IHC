import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MapaPage } from '../pages/mapa/mapa';
import { DesperdicioPage } from '../pages/desperdicio/desperdicio';
import { DicasPage } from '../pages/dicas/dicas';
import { EstatisticasPage } from '../pages/estatisticas/estatisticas';
import { InformacoesPage } from '../pages/informacoes/informacoes';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapaPage,
    DesperdicioPage,
    DicasPage,
    EstatisticasPage,
    InformacoesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapaPage,
    DesperdicioPage,
    DicasPage,
    EstatisticasPage,
    InformacoesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
