Render — A free alternative for deploying your app

Hello everyone!

In the upcoming lecture videos, we use Heroku as the app hosting service to deploy and publish our YelpCamp application online. However, Heroku stopped offering free plans for their app deploying service starting on November 28th, 2022. Currently, to deploy your app on Heroku, you will need to use a paid plan. They do offer a relatively affordable eco plan, but you would still need to set up billing and have a valid online payment card to get it to work. In an effort to find a a free solution to host your YelpCamp app while learning in this course, we researched some alternatives and found an app hosting service called Render — render.com

Therefore, if you want a free alternative to Heroku for deploying your app, you can choose to use Render if you want. You can read about the free tier that Render offers here.

We tested out their free service by deploying the final version of the YelpCamp application that we make in this course (the final version is downloaded from the resources link shared in the first lecture of the deploying section here).

Based on that, we wrote instructions to deploy the YelpCamp app via Render:

1) First, you would need to register an account on Render via their website (linked above).

After filling out the registration form there, you will need to check your email inbox to verify the email address that you used to create your Render account.

You can also use different ways to sign up to Render (as seen on their registration page), including signing up with your GitHub account. If you use your GitHub account to register on Render, then you won't have to connect it in a later step (we upload our app to GitHub, and then Render will use that to deploy our app).

Render's Node deployment instructions documentation: https://render.com/docs/deploy-node-express-app

2) Before continuing with the deployment process on Render, be sure to have your YelpCamp course app fully prepared with all the prior steps — you need to follow all the lectures prior to the Heroku deployment lecture, have all the YelpCamp code correctly set up and up to date, and importantly, you need to follow the previous MongoDB Atlas course lectures (from the start of the deploying section in the course curriculum) to set up your online hosted MongoDB database server which we will use when deploying our app on Render.

If needed, you can find Colt's final version of the YelpCamp code here, and you can find the lecture link to start setting up your online MongoDB Atlas database here. Be sure to fully go through the MongoDB Atlas lectures and have their database link for your app prepared!

Important: At this point, we will need to specify Node.js version 18 in our package.json file so you don't get any node version issues when deploying your application. Follow the instructions from Zarko's answer in this Q&A thread to specify the project's node version that Render will then use for your app.

3) Render will use GitHub for the app deployment process. You will need to use Git and GitHub to be able to complete the deployment process via Render (you can find the instructions below).

Therefore, we need to create a Git repository for our application and then push it to GitHub which will Render then use to successfully deploy our app on their platform.

You will need to go through Colt's YouTube tutorials to learn about Git and GitHub here:

- Colt's Git YouTube video: https://www.youtube.com/watch?v=USjZcfj8yxE

- Colt's GitHub YouTube video: https://www.youtube.com/watch?v=nhNq2kIvi9s

Then, use these instructions with YelpCamp — to set up a Git repository and push your app to GitHub using those steps. However, before starting to set up your Git repository for YelpCamp, first read this important note below:

After you create your Git project repository with the git init command (you will learn about it in the tutorials above), and before making your first git commit, make sure to create the following new file in your main project folder (next to the app.js and the package.json files), with this exact file name:

.gitignore (again, the file should be named exactly as specified here, including the starting dot)

Then, open the newly created .gitignore file and add exactly these two lines to it:

node_modules/

.env

Save the file changes, and then you can proceed to make your first git commit for your YelpCamp project Git repository. This will prevent the unnecessary commit of the node_modules folder and the .env file which has your private data (you can read further explanations about this below).

A general side note: Be sure to make a copy of all your code files and back it up to a secondary location before experimenting with your Git repository, especially before using any Git commands that you are unsure about.

When pushing to GitHub, you can set your repository to Private so it's not publicly visible, and you will be able to authorize Render to use and deploy using your private GitHub repositories as well.

If you are making your repository public on GitHub for any reason, be sure to read the note below:

Important security note about deploying to GitHub: When you push your code to GitHub and you choose that it's 'Public', then it will be visible to everyone. Be sure that your code doesn't contain any sensitive data (like passwords, secret keys, personal data that you don't want to share publicly, and so forth) because pushing that publicly to GitHub would compromise private data and share it with everyone. But even if your GitHub repository is set to 'Private', make sure to also follow the same principles of not adding any private/secret data to it. Note that if you had past Git commits in your project repository that had private data, this can be accessed as well, even after using the .gitignore approach. Be sure to research online (via Google) about Git and GitHub security and avoiding to share private data like passwords or keys in your Git repository code (and how to purge private data from the git commit history, if you made past commits with private data).

For example, if you are using the dotenv module and you have an .env file for your project, you need to use Git's .gitignore feature to make sure you don't add or commit the .env file (which contains secret data) to your Git repository, and therefore to avoid pushing it to GitHub. Make sure to research how to .gitignore your .env file — for example, see the answer here.

Also, make sure to also not commit the node_modules folder of your app, so you don't cause any module issues when the app is deployed to Render. See Zarko's notes about it on this link.

4) After signing up to Render, you will be able to access your account dashboard.

5) From your Render account dashboard, click on the New + button in the navbar (on the top-right of the page) and select the Web Service option.

If you haven't connected your GitHub account to your Render account, you will need to do that now, and also authorize Render to use any of your GitHub repositories that you would like to deploy.

6) After Render is authorized to use your GitHub, you will be taken to the page to select a repository of the app that you are deploying.

At this point, select the YelpCamp repository that you pushed to GitHub earlier (it can be a private GitHub repository, as mentioned before).

Once you find the repository from the list, you will then need to select it and click the Connect button.

7) After you find and connect your app's GitHub repository when creating a new service on Render, then you will be taken to a form that you need to fill out to continue the deployment process.

You need to fill out these fields there:

Name: select a simple name for your deployed app. Note: the Name value has an influence on the application URL that you will get when the application is deployed.

Region: choose the region where your app is going to be hosted based on your preference.

Branch: choose the Git branch that you want to use for deployment (you set that up when following the Git and GitHub instructions earlier — for example, the main or the master branch, or some other branch that you've set up for deploying).

Environment: Node

Build Command: npm install

Start Command: node app.js

Below that, choose the Free plan for your deployed app. You can familiarize yourself with Render's free plans here.

Further below that (on the same page), you can click the Advanced button to check some of the advanced options. You don't need to change these, but keep note of the Auto-Deploy option — if you set it to 'Yes' then it will automatically try to deploy when you push new code to your repository on GitHub. If you push app code updates to GitHub which don't work for deployment, it could break the deployed app. You can select 'No' to manually handle your deploys from your deployed app page on Render, which may be a safer option that gives you more control over the re-deployment process when you apply and push app updates to the GitHub repository.

8) After everything is set up, you can finally click the Create New Service button at the bottom of the page.

9) From there, you will be redirected to a page that shows the logs of the app deployment process.

* Reminder: If you get any errors it could be related to needing to set the "node" engine version for your app/project, follow Zarko's instructions in this Q&A thread (if you haven't already).

At this point, our YelpCamp app deployment will fail because we still need to set up the app's environment variables on Render.

To get this fixed, please proceed with the steps below.

11) From your app page on Render, on the menu on the left find and click the Environment option.

From that page, you can add Environment Variables for your application.

12) Therefore, click on the Add Environment Variable button to add each new environment variable for your application.

Keep clicking that button to add all your application's environment variables.

For the course YelpCamp app that we create in the lectures, you will likely need to define these environment variables (keys) if you followed Colt directly:

DB_URL — set to your MongoDB Atlas database link

SECRET — choose an arbitrary value (make it complex!)

MAPBOX_TOKEN — set it to your Mapbox token

CLOUDINARY_CLOUD_NAME — set it to your Cloudinary cloud name

CLOUDINARY_KEY — set it to your Cloudinary key

CLOUDINARY_SECRET — set it to your Cloudinary secret

13) We are almost done here, but you still need to do some MonogDB Atlas database configuration first!

When you deploy an app on Render, from the Render app dashboard in your browser, you can click the 'Connect' button in the top-right of the interface to find the static IPs ('Static Outbound IP Addresses') that your deployed application will be using. Copy your app's IP addresses from there and save them to a text file or a note on your computer, for later.

On the other hand, in the MongoDB Atlas configuration, we need to configure IPs that are allowed to connect to our MongoDB Atlas database.

Therefore, log in to your MongoDB Atlas account and go to your MongoDB Atlas cluster dashboard in the browser (if you, by any chance, didn't already create your MongoDB Atlas cluster/database, follow the video lecture from the beginning of this section to create it). In your MongoDB Atlas cluster dashboard, find the 'Network Access' option on the left-hand sidebar.

When you load this Network Access interface, find the '+ ADD IP ADDRESS' button on the top-right corner of the page, and add each of your Render app IP addresses that you copied from your Render app dashboard earlier.

A note: You can also choose to allow all IPs to allow access to your MongoDB Atlas database from everywhere. This can work, but since Render does give us the exact static IPs that our deployed app will be using, we can use that and specifically only allow those IPs for some extra database access security.

14) After that, if everything is correct, your deployed app should be working!

Find your app link towards the top of the app page on Render and test it out!

If anything goes wrong you can check the 'Logs' page in your app's dashboard (on Render).