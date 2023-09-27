import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, map } from 'rxjs';

export const LAUNCHES = gql`
{
  launchesPast(limit: 10) {
    mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
    links {
      article_link
      video_link
    }
    rocket {
      rocket_name
    }
  }
}
`;


@Injectable({
  providedIn: 'root'
})
export class GraphExampleService {

  constructor(private apollo: Apollo) {}

  getAllItems(): Observable<any> {
    return this.apollo
      .watchQuery<any>({
        query: LAUNCHES,
      })
      .valueChanges.pipe(map((result) => result.data));
  }
}
