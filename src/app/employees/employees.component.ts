import { Component, OnInit, ElementRef, Renderer, HostListener } from '@angular/core';
import { Employee } from '../employee';
import { HrService } from '../hr.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];
  averageAge: number;
  nameInputSearch = '';

  constructor(private hrService: HrService,
    private el: ElementRef,
    private renderer: Renderer) { }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    if (targetElement.tagName === 'TD') {
      const cells = document.querySelectorAll('td');
      for (const cell of <any>cells) {
        cell.classList.remove('selected');
      }
      this.renderer.setElementClass(targetElement, 'selected', true);
    }
  }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    this.hrService.getEmployees()
    .subscribe(employees => this.setEmployees(employees));
  }

  setEmployees(employees): void {
    this.employees = employees;
    const sumAge = employees.reduce((acc, x) => acc + x.age, 0);
    this.averageAge = Math.round(sumAge / employees.length * 10) / 10;
  }

  searchEmployees(): void {
    console.log(this.nameInputSearch);
    this.hrService.searchEmployees(this.nameInputSearch)
      .subscribe(employees => this.setEmployees(employees));
  }
}
