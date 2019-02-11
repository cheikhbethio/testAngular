import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { TodoService } from './todo.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, FlexLayoutModule ],
  declarations: [ AppComponent ],
  providers:    [ TodoService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
