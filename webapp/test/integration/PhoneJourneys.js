jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"empresa/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"empresa/test/integration/pages/App",
	"empresa/test/integration/pages/Browser",
	"empresa/test/integration/pages/Master",
	"empresa/test/integration/pages/Detail",
	"empresa/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "empresa.view."
	});

	sap.ui.require([
		"empresa/test/integration/NavigationJourneyPhone",
		"empresa/test/integration/NotFoundJourneyPhone",
		"empresa/test/integration/BusyJourneyPhone"
	], function() {
		QUnit.start();
	});
});