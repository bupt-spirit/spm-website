import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatPaginatorIntl,
  MatPaginatorModule,
  MatSidenavModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { UserIndicatorComponent } from './user-indicator/user-indicator.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiInterceptor, JwtInterceptor } from './_interceptors';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreditsComponent } from './credits/credits.component';
import { AlertComponent } from './alert/alert.component';
import { RegisterComponent } from './register/register.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { TeacherHomeComponent } from './teacher-home/teacher-home.component';
import { AdminConsoleComponent } from './admin-console/admin-console.component';
import { LogoutComponent } from './logout/logout.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { ServiceErrorMessageComponent } from './service-error-message/service-error-message.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { CourseSummaryComponent } from './course-summary/course-summary.component';
import { SelectableCoursesComponent } from './selectable-courses/selectable-courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { NoticeComponent } from './notice/notice.component';
import { UserReferenceComponent } from './user-reference/user-reference.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeachersComponent } from './teachers/teachers.component';
import { AddNoticeComponent } from './add-notice/add-notice.component';
import { NoticeListComponent } from './notice-list/notice-list.component';
import { NoticesComponent } from './notices/notices.component';
import { CustomMatPaginatorIntl } from './_internationalization/custom-mat-paginator-intl';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserIndicatorComponent,
    LoginComponent,
    HomeComponent,
    CreditsComponent,
    AlertComponent,
    RegisterComponent,
    StudentHomeComponent,
    TeacherHomeComponent,
    AdminConsoleComponent,
    LogoutComponent,
    AddTeacherComponent,
    ErrorMessageComponent,
    ServiceErrorMessageComponent,
    AddCourseComponent,
    TeacherListComponent,
    CourseSummaryComponent,
    SelectableCoursesComponent,
    CourseDetailComponent,
    NoticeComponent,
    UserReferenceComponent,
    TeacherComponent,
    TeachersComponent,
    AddNoticeComponent,
    NoticeListComponent,
    NoticesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatListModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
