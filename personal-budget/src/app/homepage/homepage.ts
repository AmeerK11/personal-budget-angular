import { Component, AfterViewInit, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart, registerables } from 'chart.js';
import { Article } from '../article/article';
import { isPlatformBrowser } from '@angular/common';

Chart.register(...registerables);

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [Article],
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.scss']
})
export class Homepage implements AfterViewInit {
  @ViewChild('myChart', { static: true }) myChartRef!: ElementRef;
  private chart!: Chart;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit() {
    // Only run chart code in the browser
    if (!isPlatformBrowser(this.platformId)) {
      console.log('Running on server – skipping chart creation.');
      return;
    }

    console.log('Fetching budget data...');
    this.http.get<{ myBudget: { title: string; budget: number }[] }>('http://localhost:3000/budget')
      .subscribe({
        next: res => {
          if (res && res.myBudget) {
            const labels = res.myBudget.map(b => b.title);
            const data = res.myBudget.map(b => b.budget);

            console.log('Labels:', labels);
            console.log('Data:', data);

            this.createChart(labels, data);
          } else {
            console.error('Response does not contain myBudget');
          }
        },
        error: err => console.error('Error fetching budget:', err)
      });
  }

  private createChart(labels: string[], data: number[]) {
    const canvas = this.myChartRef.nativeElement as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      console.error('Canvas context not found!');
      return;
    }

    this.chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: [
            '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',
            '#9966FF', '#FF9F40', '#8BC34A'
          ]
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'bottom' } }
      }
    });

    console.log('Chart created successfully.');
  }
}
