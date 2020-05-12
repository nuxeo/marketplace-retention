# marketplace-retention

## Release Process
Retention Manager was added on HF context for 10.10 and due to this reason and also to the timings it was implemented and tested, it needs to have HF26 for working properly.

In order to have HF26 as dependency and avoid users to install this addon without it, we had the need to perform the changes under [3326b96|https://github.com/nuxeo/marketplace-retention/commit/3326b96f385aeeb445977e241adb983a4c400161]. But these changes prevent Retention Management functional tests to run due to some restritions on our runners.

Given this, as part of the release process of public/final versions, we'll need to add the referenced commit back, release the addon and then revert it again.