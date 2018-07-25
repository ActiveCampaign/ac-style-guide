ActiveCampaign Style Guide
=======================================

The ActiveCampaign Style Guide houses all of our internal style and design information. It is a portal to give insight into how to design within the organization and how to create a consistent brand presence.

## TO DO

- Marketing site patterns guide

## Install

Use [RVM](https://rvm.io) to install Ruby (``~v2.2.1``) on your machine if you have not done so already. This will allow easy management of your Ruby installs.

``rvm list``

Should show something along the following lines...

```
rvm rubies

=* ruby-2.2.1 [ x86_64 ]

# => - current
# =* - current && default
#  * - default
```

In the directory where the style guide is...

``bundle install``

Run db migration

``rake db:migrate``

Launch site

``rails s``

## Deployment

Create a pull request (into ``master``) from your fork with your changes.
