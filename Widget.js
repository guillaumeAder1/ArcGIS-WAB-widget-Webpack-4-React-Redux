///////////////////////////////////////////////////////////////////////////
// Copyright © 2014 - 2016 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

define([
  'dojo/_base/declare',
  'dojo/_base/lang',
  'dojo/_base/html',
  'dojo/on',
  './dist/vendors', // load react. ReactDOM and other dependencies...
  'dijit/_WidgetsInTemplateMixin',
  'jimu/BaseWidget',
  'jimu/LayerInfos/LayerInfos',
  'esri/dijit/Legend'
], function (
  declare,
  lang,
  html,
  on,
  vendors,
  _WidgetsInTemplateMixin,
  BaseWidget,
  LayerInfos,
  Legend
) {

    var clazz = declare([BaseWidget, _WidgetsInTemplateMixin], {
      name: 'Legend',
      baseClass: 'jimu-widget-Legend',


      startup: function () {

      },

      onOpen: function () {
        // load widget once DOM root element is created
        require(['./widgets/Legend/dist/widget.js'], function (widget) {
          widget.load({ map: this.map, config: this.config })
        }.bind(this))
      },

      onClose: function () {

      },

    });
    return clazz;
  });
