# How to add Content Tab in Active Workspace of Teamcenter.

You have to follow below 3 Steps to add content :
1- Create Prefernce
2- Update Global Constants
3- Add Code in Stylesheet

1- Create Preference
To Create Preference in Teamcenter , go to Edit->Options :

<img src="../images/3_1.JPG" alt="Folder of Code" width="600"/>

Than in Search->Click on Star yellow button in top left corner :

<img src="../images/3_2.JPG" alt="Folder of Code" width="600"/>

Give following details:
a- Name : AWC_item-revision-type.showObjectLocation.OccurenceManagementSubLocation.SUMMARYRENDERING
b- Category : Active Workspace
c- Value : Awp0_your_item_revision_name

2- Update Global Constants

After that go to Extensions->Constants->Right Click->Open Global Constants Editor like :

<img src="../images/3_3.JPG" alt="Folder of Code" width="600"/>

In Global Constants open - Awb0SupportsStructure & give the custom business object name where yoiu are putting content Tab :

<img src="../images/3_4.JPG" alt="Folder of Code" width="600"/>

<img src="../images/3_5.JPG" alt="Folder of Code" width="600"/>

3- Add Content Code in Stylesheet

Now Check whether content Code is added or not , if not then add like this :

<img src="../images/3_6.JPG" alt="Folder of Code" width="600"/>

Thanks for Reading !
