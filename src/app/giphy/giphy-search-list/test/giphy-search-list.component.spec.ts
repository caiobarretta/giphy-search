import { GiphySearchListComponent } from './../giphy-search-list.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ShareModule } from 'src/app/share/share.module';

describe('GiphySearchListComponent', () => {
    let fixture: ComponentFixture<GiphySearchListComponent>;
    let giphyComponent: GiphySearchListComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ GiphySearchListComponent ],
          imports: [ ShareModule ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(GiphySearchListComponent);
            giphyComponent = fixture.componentInstance;
        });
    }));

    it('Deveria ter criado o GiphySearchListComponent', async(() => {
        fixture.detectChanges();
        expect(giphyComponent).toBeTruthy();
        expect(giphyComponent).not.toBeNull();
    }));
});
