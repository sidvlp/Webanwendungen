import { Routes } from '@angular/router';
import {BooksComponent} from './books/books.component';
import {BuchempfehlungenComponent} from './buchempfehlungen/buchempfehlungen.component';
import {FAQComponent} from './faq/faq.component';
import {KontaktComponent} from './kontakt/kontakt.component';
import {ImpressumComponent} from './impressum/impressum.component';

export const routes: Routes = [
    {path: 'books', component : BooksComponent},
    {path: 'buchempfehlungen', component : BuchempfehlungenComponent},
    {path: 'faq', component : FAQComponent},
    {path: 'kontakt', component : KontaktComponent},
    {path: 'impressum', component : ImpressumComponent},
];

