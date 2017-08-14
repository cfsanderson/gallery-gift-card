# Gallery Gift Card  

Thank you for contributing to this project!  
All of our lives have been impacted by the TIY staff and this is your chance to say thank you in a uniquely Iron Yard way. Please read this doc fully for instructions on how to get started. Once you have read this doc, if you still have problems you can get help in the ["tpa_students" channel of the TIY Students Slack](https://tiystudents.slack.com/messages/G6BHGSMPE).  

## Getting Started  

The styles and functionality of the site are already done for you so you only need 3 pieces of content to contribute.
1) a profile pic that will be cropped to a circle and display at a max of 125px.
2) a personal note to the staff.
3) a background image. _This is optional. if you would rather use one of the pre-populated images from `./public/images/background-pics` you are more than welcome to._

This project was built with the delta stack of the [`create-app-app` boilerplate](https://yarnpkg.com/en/package/create-app-app) which is plain HTML, CSS (Sass), and vanilla Javascript (ES2015). If you've come through Jason's course this should be familiar to you. In case you haven't, make sure that you have `yarn` installed before starting the project. If you are unsure, run `which yarn` in your terminal and you should return something like `/usr/local/bin/yarn`. You can also run `yarn --version` which should give you a version number such as `0.27.5`. If you don't get a result from these then you will need to run [`brew install yarn`](https://yarnpkg.com/en/docs/install) to get the yarn package manager.  

To get started:
- fork the repository from github
- `git clone git@github.com:[your username]/gallery-gift-card.git`
- `cd gallery-gift-card`
- `yarn`
- `atom .` or open in your text editor of choice.
- `yarn start` to start the dev server so you can see changes immediately.  

Open up index.html and you can either update one of the existing `panel-000` divs or copy/pasta an existing one and make it your own. If you are using one of the pre-existing divs it will look something like this...

```
<div class="panel-001">
  <div class="panel">
    <h2>Your Name Here</h2>
    <div>
      <div class="profile-pic" alt="my profile picture"></div>
    </div>
    <section>
      <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </section>
  </div>
</div>
```  

## Adding Content:
- Change the 3 digit portion of the second class name on your div to the first 2 letters of your first and last name (e.g. "panel-002" would become "panel-MaDe" for Mark Dewey) This will help us to alphabetize the divs later by name.
- Update the `h2` with your full name.
- Copy your personal message to the staff into the `p` tags in the section below that.
- Next, head on over to `_panels.scss` and find the declaration block number that you changed in `index.html` and update it with your new class name (e.g. `.panel-002` becomes `.panel-MaDe` following the example above).
- Copy your profile and background pics into the appropriate directories (`./src/images/background-pics` or `./src/images/profile-pics`).
- Update the background-image url in your declaration block.
  - _Use good quality photos but keep in mind that if your picture file is too large, it will be compressed to allow for faster page load times._

When you are done you should end up with a div that looks like this in index.html...
```
<div class="panel-MaDe">
  <div class="panel">
    <h2>Mark Dewey</h2>
    <div>
      <div class="profile-pic" alt="Mark Dewey's profile picture"></div>
    </div>
    <section>
      <p>I love The Iron Yard! This has been a life-changing experience for me and I'm so grateful for the investment that you have made in my life!</p>
    </section>
  </div>
</div>
```

and also update the corresponding CSS declaration block in `_panels.scss` that will look something like this...  

```
.panel-MaDe {
  background: url(../images/background-pics/my-cool-background.jpg) no-repeat center center;
  background-size: cover;

  .profile-pic {
    background: url(../images/profile-pics/marks-ugly-mug.jpg) center / contain;
  }
}
```   

## Submitting Changes
When you are ready to submit your code for a pull request, make sure you are still on your branch and do a
- `git add .`
- `git commit -m "<your message here>"`
- `git push`
- The changes are pushed to your forked repo
- create a Pull request to merge your changes
- ![alt text](../src/images/background-pics/pull-request-process-png "pull request")

### Thanks for contributing!!!

## TODOs...
- [x] Fix the overlay animation so that it doesn't come in on each individual element. It should be one solid overlay (kinda like a modal).
- [x] Before being clicked, each section should be the height of the profile pic and THEN expand to full height and include the text.
- [ ] Better name than "Gallery" for h1.
- [ ] More info/instructions in the header?
  - [ ] sticky header?
- [ ] Add a footer?
- [ ] Responsive layout for nice mobile experience.
