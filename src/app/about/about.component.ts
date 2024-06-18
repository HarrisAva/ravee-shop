import { Component, inject } from '@angular/core'
import { Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  private meta = inject(Meta)

  ngOnInit(): void {

    // adding tags for seo
    this.meta.addTag(
      {
        name: 'title',
        content: 'เกี่ยวกับเรา | Stock Management'
      },
    )
    this.meta.addTag(
      {
        name: 'description',
        content: 'เกี่ยวกับเรา, Ravee of Titans is a web that allows users to view art gallery of Ravee and information of commissions available.'
      },
    )
    this.meta.addTag(
      {
        name: 'keywords',
        content: 'เกี่ยวกับเรา, ravee, raveeoftitans, ravee of titans, art, illustration, vtube model, character design, commission, art gallery'
      },
    )
  }

}
