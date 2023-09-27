import { TestBed } from '@angular/core/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';

import { GraphExampleService } from './graph-example.service';
import { FetchPolicy, gql } from '@apollo/client';

const mock_response = {
  "data": {
      "launchesPast": [
          {
              "mission_name": "FalconSat",
              "launch_date_local": "2006-03-25T10:30:00+12:00",
              "launch_site": null,
              "links": {
                  "article_link": "https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html",
                  "video_link": "https://www.youtube.com/watch?v=0a_00nJ_Y88",
                  "__typename": "LaunchLinks"
              },
              "rocket": {
                  "rocket_name": "Falcon 1",
                  "__typename": "LaunchRocket"
              },
              "__typename": "Launch"
          },
          {
              "mission_name": "DemoSat",
              "launch_date_local": "2007-03-21T13:10:00+12:00",
              "launch_site": null,
              "links": {
                  "article_link": "https://www.space.com/3590-spacex-falcon-1-rocket-fails-reach-orbit.html",
                  "video_link": "https://www.youtube.com/watch?v=Lk4zQ2wP-Nc",
                  "__typename": "LaunchLinks"
              },
              "rocket": {
                  "rocket_name": "Falcon 1",
                  "__typename": "LaunchRocket"
              },
              "__typename": "Launch"
          },
          {
              "mission_name": "Trailblazer",
              "launch_date_local": "2008-08-03T15:34:00+12:00",
              "launch_site": null,
              "links": {
                  "article_link": "http://www.spacex.com/news/2013/02/11/falcon-1-flight-3-mission-summary",
                  "video_link": "https://www.youtube.com/watch?v=v0w9p3U8860",
                  "__typename": "LaunchLinks"
              },
              "rocket": {
                  "rocket_name": "Falcon 1",
                  "__typename": "LaunchRocket"
              },
              "__typename": "Launch"
          },
          {
              "mission_name": "RatSat",
              "launch_date_local": "2008-09-28T11:15:00+12:00",
              "launch_site": null,
              "links": {
                  "article_link": "https://en.wikipedia.org/wiki/Ratsat",
                  "video_link": "https://www.youtube.com/watch?v=dLQ2tZEH6G0",
                  "__typename": "LaunchLinks"
              },
              "rocket": {
                  "rocket_name": "Falcon 1",
                  "__typename": "LaunchRocket"
              },
              "__typename": "Launch"
          },
          {
              "mission_name": "RazakSat",
              "launch_date_local": "2009-07-13T15:35:00+12:00",
              "launch_site": null,
              "links": {
                  "article_link": "http://www.spacex.com/news/2013/02/12/falcon-1-flight-5",
                  "video_link": "https://www.youtube.com/watch?v=yTaIDooc8Og",
                  "__typename": "LaunchLinks"
              },
              "rocket": {
                  "rocket_name": "Falcon 1",
                  "__typename": "LaunchRocket"
              },
              "__typename": "Launch"
          },
          {
              "mission_name": "Falcon 9 Test Flight",
              "launch_date_local": "2010-06-04T14:45:00-04:00",
              "launch_site": null,
              "links": {
                  "article_link": "http://www.spacex.com/news/2013/02/12/falcon-9-flight-1",
                  "video_link": "https://www.youtube.com/watch?v=nxSxgBKlYws",
                  "__typename": "LaunchLinks"
              },
              "rocket": {
                  "rocket_name": "Falcon 9",
                  "__typename": "LaunchRocket"
              },
              "__typename": "Launch"
          },
          {
              "mission_name": "COTS 1",
              "launch_date_local": "2010-12-08T11:43:00-04:00",
              "launch_site": null,
              "links": {
                  "article_link": "https://en.wikipedia.org/wiki/SpaceX_COTS_Demo_Flight_1",
                  "video_link": "https://www.youtube.com/watch?v=cdLITgWKe_0",
                  "__typename": "LaunchLinks"
              },
              "rocket": {
                  "rocket_name": "Falcon 9",
                  "__typename": "LaunchRocket"
              },
              "__typename": "Launch"
          },
          {
              "mission_name": "COTS 2",
              "launch_date_local": "2012-05-22T03:44:00-04:00",
              "launch_site": null,
              "links": {
                  "article_link": "https://en.wikipedia.org/wiki/Dragon_C2%2B",
                  "video_link": "https://www.youtube.com/watch?v=tpQzDbAY7yI",
                  "__typename": "LaunchLinks"
              },
              "rocket": {
                  "rocket_name": "Falcon 9",
                  "__typename": "LaunchRocket"
              },
              "__typename": "Launch"
          },
          {
              "mission_name": "CRS-1",
              "launch_date_local": "2012-10-08T20:35:00-04:00",
              "launch_site": null,
              "links": {
                  "article_link": "https://www.nasa.gov/mission_pages/station/main/spacex-crs1-target.html",
                  "video_link": "https://www.youtube.com/watch?v=-Vk3hiV_zXU",
                  "__typename": "LaunchLinks"
              },
              "rocket": {
                  "rocket_name": "Falcon 9",
                  "__typename": "LaunchRocket"
              },
              "__typename": "Launch"
          },
          {
              "mission_name": "CRS-2",
              "launch_date_local": "2013-03-01T15:10:00-04:00",
              "launch_site": null,
              "links": {
                  "article_link": "https://en.wikipedia.org/wiki/SpaceX_CRS-2",
                  "video_link": "https://www.youtube.com/watch?v=ik0ElKl5kW4",
                  "__typename": "LaunchLinks"
              },
              "rocket": {
                  "rocket_name": "Falcon 9",
                  "__typename": "LaunchRocket"
              },
              "__typename": "Launch"
          }
      ]
  }
}



describe('GraphExampleService', () => {
  let service: GraphExampleService;
  let backend: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
     imports:[
      ApolloTestingModule
     ]
    });
    service = TestBed.inject(GraphExampleService);
  });

  backend = TestBed.inject(ApolloTestingController);

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should run my query',(done)=>{
     //Given

     const queryOptions = {
      query: gql`
      query SearchAirports($searchString: String!) {
        searchAirports(search: $searchString) {
          edges {
            node {
              resourceId
              airportName
              cityName
              countryName
              iata
              icao                    
            }
          }
        }
      }`,
      // variables: {
      //     searchString: 'KMIA'
      // },
      fetchPolicy: 'network-only' as FetchPolicy,
  };

  service.getAllItems().subscribe(result => {
      expect(JSON.stringify(result)).toEqual(JSON.stringify(mock_response));
      done();
  });

  backend.expectOne(queryOptions.query).flush(mock_response);
  })
});
