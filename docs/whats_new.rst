**********
What's New
**********

**Last Updated:** May 2017

Refer to this article for information about each new release of Tethys Platform.

Release |version|
=================

Powered by Miniconda Environment
--------------------------------

* Tethys Platform is now installed in a Miniconda environment.
* Using the Miniconda includes Conda, an open source Python package management system
* Conda can be used to install Python dependencies as well as system dependencies
* Installing packages like GDAL or NetCDF4 are as easy as ``conda install gdal``
* Conda is cross platform: it works on Windows, Linux, and MacOS

See: `Miniconda <https://conda.io/miniconda.html>`_ and `Conda <https://conda.io/docs/>`_

Cross Platform Support
----------------------

* Develop natively on Windows, Mac, or Linux!
* No more virtual machines.
* Be careful with your paths.

See: :doc:`installation`

Installation Scripts
--------------------

* Completely automated installation of Tethys
* Scripts provided for Mac, Linux, and Windows.

See: :doc:`installation`

Python 3
--------

* Experimental Python 3 Support in 2.0.0
* Tethys Dataset Services is not completely Python 3 compatible
* Use ``--python-version 3`` option on the installation script
* Python 2 support will be dropped in version 2.1

See: :doc:`installation`

Templating API
--------------

* Leaner, updated theme for app base template.
* New ``header_buttons`` block for adding custom buttons to app header.

See: :doc:`tethys_sdk/templating`

App Settings
------------

* Developers can create App Settings, which are configured in the admin interface of the Tethys Portal.
* Types of settings that can be created include Custom Settings, Persistent Store Settings, Dataset Service Settings, Spatial Dataset Service Settings, and Web Processing Service Settings.
* The way Tethys Services are allocated to apps is now done through App Settings.
* All apps using the Persistent Stores APIs, Dataset Services APIs, or Web Processing Services APIs prior to version 2.0.0 will need to be refactored to use the new App settings approach.

See: :doc:`./tethys_sdk/app_settings`

Commandline Interface
---------------------

* Added ``tethys list`` command that lists installed apps.
* Completely overhauled scaffold command that works cross-platform.
* New options for scaffold command that allow automatically accepting the defaults and overwriting project if it already exists.

See: :ref:`tethys_list_cmd` and :ref:`tethys_scaffold_cmd`

Tutorials
---------

* Brand new Getting Started Tutorial
* Demonstration of most Tethys SDK APIs

See: :doc:`./tutorials/getting_started`

Gizmos
------

* New way to call them
* New load dependencies Method
* Updated select_gizmo to allow Select2 options to be passed in.

See: :doc:`tethys_sdk/gizmos`

Map View
--------

* Updated OpenLayers libraries to version 4.0
* Fixes to make MapView compatible with Internet Explorer
* Can configure styling of MVDraw overlay layer
* New editable attribute for MVLayers to lock layers from being edited
* Added data attribute to MVLayer to allow passing custom attributes with layers for use in custom JavaScript
* A basemap switcher tool is now enabled on the map with the capability to configure multiple basemaps, including turning the basemap off.
* Added the ability to customize some styles of vector MVLayers.

See: :doc:`tethys_sdk/gizmos/map_view`

Esri Map View
-------------

* New map Gizmo that uses ArcGIS for JavaScript API.

See: :doc:`tethys_sdk/gizmos/esri_map`

Plotly View and Bokeh View Gizmos
---------------------------------

* True open source options for plotting in Tethys

See: :doc:`tethys_sdk/gizmos/bokeh_view` and :doc:`tethys_sdk/gizmos/plotly_view`

DataTable View Gizmos
---------------------

* Interactive table gizmo based on Data Tables.

See: :doc:`tethys_sdk/gizmos/datatable_view`

Security
--------

* Sessions will now timeout and log user out after period of inactivity.
* When user closes browser, they are automatically logged out now.
* Expiration times can be configured in settings.

See: :doc:`installation/platform_settings`

HydroShare OAuth Backend and Helper Function
--------------------------------------------

* Refactor default HydroShare OAuth backend; Token refresh is available; Add backends for HydroShare-beta and HydroShare-playground.
* Include hs_restclient library in requirements.txt; Provide a helper function to help initialize the ``hs`` object based on HydroShare social account.
* Update python-social-auth to 0.2.21.

See: :doc:`tethys_portal/social_auth`



Bugs
----

* Fixed issue where ``tethys uninstall <app>`` command was not uninstalling fully.

Prior Release Notes
===================

.. toctree::
   :maxdepth: 2

   whats_new/prior_releases
