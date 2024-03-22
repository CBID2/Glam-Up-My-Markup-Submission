# Glam Up My Markup Submission

## Description
This is a [submission for Dev.to's *Glam Up My Markup* challenge from DEV](https://dev.to/challenges/frontend).
The goal is to create a visually appealing webpage using CSS and JS.

## The Challenge

> Use CSS and JavaScript to make the below HTML markup beautiful, interactive, and useful. Your submission should be more fun and interactive than the HTML we provide, but also be usable and accessible. You should not directly edit the HTML provided, unless it is via JavaScript. We expect style and substance. You may add basic boilerplate, including meta tags etc. for presentation purposes.

```html
<section id="camp-activities-inquiry">
<h1>Camp Activities Inquiry</h1>
<form action="/submit-form" method="POST">
    <label for="activity-select">Which camp activities are you most looking forward to?</label>
    <select id="activity-select" name="activity">
        <option value="">--Please choose an option--</option>
        <option value="hiking">Hiking</option>
        <option value="canoeing">Canoeing</option>
        <option value="fishing">Fishing</option>
        <option value="crafts">Crafts</option>
        <option value="archery">Archery</option>
    </select>

    <label for="food-allergies">Food Allergies (if any)</label>
    <textarea id="food-allergies" name="food_allergies" rows="4" cols="50"></textarea>

    <label for="additional-info">Additional things the counselor should know</label>
    <textarea id="additional-info" name="additional_info" rows="4" cols="50"></textarea>

    <button type="submit">Submit</button>
</form>
</section>
```

## Inspiration

We were thinking about back to our childhood playing video games like Pokemon Silver or Zelda. So, we decided to create a form where the player has to pick an activity and they get another teammate after clicking one the submit button.
To learn more about our creation process, check out [@CBID2's post on Dev.to](https://dev.to/cbid2/lets-go-camping-4g02).
## The Result

![Preview of the final result](/docs/preview.png)

You can see the final result [here](https://glam-up-my-markup-submission.vercel.app/).

## Participants
- [Christine Belzie](https://dev.to/CBID2) as [@CBID2](https://github.com/CBID2)
- [Thomas Bonnet](https://dev.to/thomasbnt) as [@thomasbnt](https://github.com/thomasbnt)