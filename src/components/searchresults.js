import React, { Component } from 'react';
import Entry from './entry';

export default class SearchResults extends Component {
  render() {
    let entry = this.props.data;
    let results;
    if(entry) {
      let entries = [];

      for (var i = 0; i < entry[1].length; i++) {
        entries.push({
          title:entry[1][i],
          content:entry[2][i],
          url:entry[3][i]
        });

        results = entries.map(result => {
          return (
            <Entry key={result.title}
              title={result.title}
              content={result.content}
              url={result.url} />
          );
        })
      }
    }
    return (
      <div className="SearchResults">
        {results}
      </div>
    );
  }
}
