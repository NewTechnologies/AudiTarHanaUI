jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Empresa in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"empresa/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"empresa/test/integration/pages/App",
	"empresa/test/integration/pages/Browser",
	"empresa/test/integration/pages/Master",
	"empresa/test/integration/pages/Detail",
	"empresa/test/integration/pages/Create",
	"empresa/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "empresa.view."
	});

	sap.ui.require([
		"empresa/test/integration/MasterJourney",
		"empresa/test/integration/NavigationJourney",
		"empresa/test/integration/NotFoundJourney",
		"empresa/test/integration/BusyJourney",
		"empresa/test/integration/FLPIntegrationJourney"
	], function() {
		QUnit.start();
	});
});