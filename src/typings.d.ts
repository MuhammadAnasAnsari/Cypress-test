/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  exports: Cypress.ConfigOptions<any>;
  id: string;
}

declare var tinymce: any;

declare var echarts: any;
