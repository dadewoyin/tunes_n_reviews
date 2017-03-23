"use strict";
var router_1 = require('@angular/router');
// Pages for routing
var search_component_1 = require('./components/search/search.component');
var about_component_1 = require('./components/about/about.component');
var contact_component_1 = require('./components/contact/contact.component');
var artist_component_1 = require('./components/artist/artist.component');
var album_component_1 = require('./components/album/album.component');
var appRoutes = [
    {
        path: '',
        component: search_component_1.SearchComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'artist/:id',
        component: artist_component_1.ArtistComponent
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    },
    {
        path: 'album/:id',
        component: album_component_1.AlbumComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map