# ccmixter-js
This is an unofficial NodeJS client of the [ccmixter](http://ccmixter.org/) API. This is a simplified and small client that does not cover all resources and parameters that the ccmixter api actually supports.

## Installation

```
npm install ccmixter-js --save
```

Or if you are using [yarn](https://yarnpkg.com/):
```
yarn add ccmixter-js
```

## Requiring
```
const ccmixter = require('ccmixter-js');
```

## API client methods

### Songs
Search ccmixter songs by a phrase, artist, license type  and/or tags. Supported parameters:

- **searchPhrase** (string): search query term or phrase.
- **tags** (array of strings): search by genre or instrumentation tag.
- **user** (string): search by artist name or ccmixter username.
- **license** (string): search by license type. Available options:
 -  `all` (default): all license types
 - `ccplus`: royalty free ccPlus
 - `ccplus_nostems`: royalty free ccPlus without stems
 - `open`: free for commercial user
- **limit** (number): number of results to return, defaults to 10
- **offset** (number): results offset, defaults to 0

Sample invocation:
```
ccmixter.searchSongs({
    searchPhrase: 'rock',
    tags: ['female_vocals'],
    limit: 2
}).then(result => {
    //do something
});
```

Sample result:
```
{
  items:[
    {
      upload_id:'55393',
      upload_name:'Long Line Blues',
      upload_extra:[
        Object
      ],
      upload_contest:'0',
      user_name:'texasradiofish',
      upload_tags:',media,remix,bpm_090_095,non_commercial,audio,mp3,44k,stereo,CBR,female_vocals,drums,guitar,bass,piano,synth_organ,synthesizer,funk,blues,rock,electronic,brass,trombone,galveston_county,texas,',
      upload_num_scores:'7',
      file_page_url:'http://ccmixter.org/files/texasradiofish/55393',
      user_real_name:'texasradiofish',
      artist_page_url:'http://ccmixter.org/people/texasradiofish',
      license_logo_url:'http://ccmixter.org/ccskins/shared/images/lics/small-by-nc-3.png',
      license_url:'http://creativecommons.org/licenses/by-nc/3.0/',
      license_name:'Attribution Noncommercial  (3.0)',
      upload_date_format:'Sat, Jan 14, 2017 @ 2:25 PM',
      files:[
        Object
      ],
      topic_format:0,
      upload_description_plain:'Leza, Memphis, and Minnesota funkin\' blues rock fusion\r\n\r\nGave up trying to figure out what chord progressions would well support Leza\'s blues and victimized her vocal to fit a standard three chord blues: a 6,5,1 minor key blues (E, Eb and Abm).',
      upload_description_html:'<span class="big"><span class="blue"><span class="b">L</span>eza, <span class="b">M</span>emphis, and <span class="b">M</span>innesota funkin&#8217; blues rock fusion</span><br />\r\n</span><br />\r\nGave up trying to figure out what chord progressions would well support Leza&#8217;s blues and victimized her vocal to fit a standard three chord blues: a 6,5,1 minor key blues (E, Eb and Abm).'
    },
    {
      upload_id:'55278',
      upload_name:'Scintillating Love',
      upload_extra:[
        Object
      ],
      upload_contest:'0',
      user_name:'JeffSpeed68',
      upload_tags:',media,remix,bpm_120_125,cczero,audio,mp3,48k,stereo,VBR,flac,female_vocals,rock,ambient,',
      upload_num_scores:'8',
      file_page_url:'http://ccmixter.org/files/JeffSpeed68/55278',
      user_real_name:'Stefan Kartenberg',
      artist_page_url:'http://ccmixter.org/people/JeffSpeed68',
      license_logo_url:'http://i.creativecommons.org/l/zero/1.0/80x15.png',
      license_url:'http://creativecommons.org/publicdomain/zero/1.0/',
      license_name:'CC0 (CC Zero)',
      upload_date_format:'Thu, Dec 22, 2016 @ 12:54 AM',
      files:[
        Object
      ],
      topic_format:0,
      upload_description_plain:'lyrics and vocals by "Asiansaints"',
      upload_description_html:'lyrics and vocals by &#8220;Asiansaints&#8221;'
    }
  ],
  totalCount:1000
}
```

### Artists
Search ccmixter artists by a phrase. This method has only one input parameter: a search query term.

Sample invocation:
```
ccmixter.searchArtists('John').then(result => {
    //do something
});
```

Sample result:
```
[
  {
    user_id:'128646',
    user_name:'johnlangham',
    user_real_name:'John Langham',
    artist_page_url:'http://ccmixter.org/people/johnlangham',
    user_avatar_url:'http://ccmixter.org/mixter-files/images/mixter-default.gif',
    user_registered:'2017-01-11 12:32:42',
    user_homepage:''
  },
  {
    user_id:'128639',
    user_name:'pascaljohn',
    user_real_name:'Pascal John',
    artist_page_url:'http://ccmixter.org/people/pascaljohn',
    user_avatar_url:'http://ccmixter.org/mixter-files/images/mixter-default.gif',
    user_registered:'2017-01-11 10:21:55',
    user_homepage:''
  },
  {
    user_id:'128608',
    user_name:'JohnMoore_1963',
    user_real_name:'JohnMoore_1963',
    artist_page_url:'http://ccmixter.org/people/JohnMoore_1963',
    user_avatar_url:'http://ccmixter.org/mixter-files/images/mixter-default.gif',
    user_registered:'2017-01-11 04:10:32',
    user_homepage:''
  }
]
```

### Genres
Get all ccmixter genre tags.

Sample invocation:
```
ccmixter.getGenres().then(result => {
    //do something
});
```

Sample result:
```
[
  {
    name:'2_step',
    songCount:32
  },
  {
    name:'acid',
    songCount:274
  },
  {
    name:'acidhouse',
    songCount:43
  },
  {
    name:'acid_jazz',
    songCount:70
  },
  {
    name:'afrobeat',
    songCount:9
  }
]
```

### Instrumentations
Get all ccmixter instrumentation tags.

Sample invocation:
```
ccmixter.getInstrumentations().then(result => {
    //do something
});
```

Sample result:
```
[
  {
    name:'acoustic_piano',
    songCount:4
  },
  {
    name:'aep',
    songCount:2
  },
  {
    name:'akai',
    songCount:4
  },
  {
    name:'alto_saxophone',
    songCount:31
  },
  {
    name:'amiga',
    songCount:1
  }
]
```
