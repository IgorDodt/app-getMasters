import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule,MatSidenavModule, MatIconModule, MatButtonModule, MatListModule, MatTableModule, MatCardModule} from '@angular/material/';
import { PedidosPendenteComponent } from './components/pedidos-pendente/pedidos-pendente.component';
import { CardsDashboardComponent } from './components/cards-dashboard/cards-dashboard.component';
import { CategoryComponent } from './pages/category/category.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxSpinnerModule} from 'ngx-spinner';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PedidosPendenteComponent,
    CardsDashboardComponent,
    CategoryComponent,
    CategoriesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
