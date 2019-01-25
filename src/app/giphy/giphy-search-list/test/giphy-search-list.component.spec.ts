import { Giphy } from './../../giphy-search-manual/giphy.type';
import { GiphySearchListComponent } from './../giphy-search-list.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ShareModule } from 'src/app/share/share.module';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

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

    it('Deveria ter duas tags a na rederização do test do Component GiphySearchList', () => {
      giphyComponent.gifsList = {data:
        [{type: 'gif',
        id: 'rdma0nDFZMR32',
        slug: 'happy-car-home-rdma0nDFZMR32',
        url: 'https://giphy.com/gifs/happy-car-home-rdma0nDFZMR32',
        bitly_gif_url: 'https://gph.is/16j9Ljr',
        bitly_url: 'https://gph.is/16j9Ljr',
        embed_url: 'https://giphy.com/embed/rdma0nDFZMR32',
        username: '',
        source: 'https://www.gifbay.com/gif/when_im_coming_home-8884/',
        rating: 'g',
        content_url: '',
        source_tld: 'www.gifbay.com',
        source_post_url: 'https://www.gifbay.com/gif/when_im_coming_home-8884/',
        is_sticker: 0,
        import_datetime: '2013-09-22 13:29:33',
        trending_datetime: '0000-00-00 00:00:00',
        images: {
          fixed_height_still: {
            url: 'https://media0.giphy.com/media/rdma0nDFZMR32/200_s.gif',
            width: '278',
            height: '200',
            size: ''
          },
          original_still: {
          url: 'https://media0.giphy.com/media/rdma0nDFZMR32/giphy_s.gif',
          width: '500',
          height: '360',
          size: ''
          },
          fixed_width: {
            url: 'https://media0.giphy.com/media/rdma0nDFZMR32/200w.gif',
            width: '200',
            height: '144',
            size: '55367',
            mp4: 'https://media0.giphy.com/media/rdma0nDFZMR32/200w.mp4',
            mp4_size: '9826',
            webp: 'https://media0.giphy.com/media/rdma0nDFZMR32/200w.webp',
            webp_size: '53798'
          },
          fixed_height_small_still: {
            url: 'https://media0.giphy.com/media/rdma0nDFZMR32/100_s.gif',
            width: '139',
            height: '100',
            size: ''
          },
          fixed_height_downsampled: {
            url: 'https://media0.giphy.com/media/rdma0nDFZMR32/200_d.gif',
            width: '278',
            height: '200',
            size: '240018',
            webp: 'https://media0.giphy.com/media/rdma0nDFZMR32/200_d.webp',
            webp_size: '72080'
          },
          preview: {
            width: '450',
            height: '324',
            mp4: 'https://media0.giphy.com/media/rdma0nDFZMR32/giphy-preview.mp4',
            mp4_size: '27969'
          },
          fixed_height_small: {
            url: 'https://media0.giphy.com/media/rdma0nDFZMR32/100.gif',
            width: '139',
            height: '100',
            size: '95405',
            mp4: 'https://media0.giphy.com/media/rdma0nDFZMR32/100.mp4',
            mp4_size: '13679',
            webp: 'https://media0.giphy.com/media/rdma0nDFZMR32/100.webp',
            webp_size: '31304'
          },
          downsized_still: {
            url: 'https://media0.giphy.com/media/rdma0nDFZMR32/giphy-downsized_s.gif',
            width: '500',
            height: '360',
            size: '59529'
          },
          downsized: {
            url: 'https://media0.giphy.com/media/rdma0nDFZMR32/giphy-downsized.gif',
            width: '500',
            height: '360',
            size: '430062'
          },
          downsized_large: {
            url: 'https://media0.giphy.com/media/rdma0nDFZMR32/giphy.gif',
            width: '500',
            height: '360',
            size: '430062'
          },
          fixed_width_small_still: {
            url: 'https://media0.giphy.com/media/rdma0nDFZMR32/100w_s.gif',
            width: '100',
            height: '72',
            size: ''
          },
          preview_webp: {
            url: 'https://media0.giphy.com/media/rdma0nDFZMR32/giphy-preview.webp',
            width: '318',
            height: '229',
            size: '49740'
          },
          fixed_width_still: {
            url: 'https://media0.giphy.com/media/rdma0nDFZMR32/200w_s.gif',
            width: '200',
            height: '144',
            size: ''
          },
          fixed_width_small: {
            url: 'https://media0.giphy.com/media/rdma0nDFZMR32/100w.gif',
            width: '100',
            height: '72',
            size: '55367',
            mp4: 'https://media0.giphy.com/media/rdma0nDFZMR32/100w.mp4',
            mp4_size: '11242',
            webp: 'https://media0.giphy.com/media/rdma0nDFZMR32/100w.webp',
            webp_size: '19280'
          },
          downsized_small: {
            width: '500',
            height: '360',
            mp4: 'https://media0.giphy.com/media/rdma0nDFZMR32/giphy-downsized-small.mp4',
            mp4_size: '54814'
          },
          fixed_width_downsampled: {
            url: 'https://media0.giphy.com/media/rdma0nDFZMR32/200w_d.gif',
            width: '200',
            height: '144',
            size: '137159',
            webp: 'https://media0.giphy.com/media/rdma0nDFZMR32/200w_d.webp',
            webp_size: '40064'
          },
          downsized_medium: {
            url: 'https://media0.giphy.com/media/rdma0nDFZMR32/giphy.gif',
            width: '500',
            height: '360',
            size: '430062'
          },
          original: {
            url: 'https://media0.giphy.com/media/rdma0nDFZMR32/giphy.gif',
            width: '500',
            height: '360',
            size: '430062',
            frames: '8',
            mp4: 'https://media0.giphy.com/media/rdma0nDFZMR32/giphy.mp4',
            mp4_size: '34762',
            webp: 'https://media0.giphy.com/media/rdma0nDFZMR32/giphy.webp',
            webp_size: '307578',
            hash: 'fdsdfsd'
          },
          fixed_height: {
            url: 'https://media0.giphy.com/media/rdma0nDFZMR32/200.gif',
            width: '278',
            height: '200',
            size: '95405',
            mp4: 'https://media0.giphy.com/media/rdma0nDFZMR32/200.mp4',
            mp4_size: '8910',
            webp: 'https://media0.giphy.com/media/rdma0nDFZMR32/200.webp',
            webp_size: '96234'
          },
          looping: {
            mp4: 'https://media0.giphy.com/media/rdma0nDFZMR32/giphy-loop.mp4',
            mp4_size: '3769157'
          },
          original_mp4: {
            width: '480',
            height: '344',
            mp4: 'https://media0.giphy.com/media/rdma0nDFZMR32/giphy.mp4',
            mp4_size: '34762'
          },
          preview_gif: {
            url: 'https://media0.giphy.com/media/rdma0nDFZMR32/giphy-preview.gif',
            width: '269',
            height: '194',
            size: '47598'
          }
        },
        title: 'happy happiness GIF',
        _score: 2500094.2,
        analytics: {
          onload: {
            url: 'https://giphy_analytics.giphy.com/simple_analytics?response_id=5c4a4de358374c61416f6213&event_type=GIF_SEARCH' +
            '&gif_id=rdma0nDFZMR32&action_type=SEEN'
          },
          onclick: {
            url: 'https://giphy_analytics.giphy.com/simple_analytics?response_id=5c4a4de358374c61416f6213&event_type=GIF_SEARCH' +
            '&gif_id=rdma0nDFZMR32&action_type=CLICK'
          },
          onsent: {
            url: 'https://giphy_analytics.giphy.com/simple_analytics?response_id=5c4a4de358374c61416f6213&event_type=GIF_SEARCH' +
            '&gif_id=rdma0nDFZMR32&action_type=SENT'
          }
        },
        user: {
          avatar_url: 'string',
          banner_url: 'string',
          banner_image: 'string',
          profile_url: 'string',
          username: 'string',
          display_name: 'string',
          is_verified: true,
        }
      }],
      pagination: {
        total_count: 92204,
        count: 1,
        offset: 0
      },
      meta: {
        status: 200,
        msg: 'OK',
        response_id: '5c4a4de358374c61416f6213'
      }};
      fixture.detectChanges();
      fixture.whenStable().then( () => {
        const debugElements: DebugElement[] = fixture.debugElement.queryAll(By.css('a'));
        expect(debugElements.length).toBe(1);
      });
    });
});
