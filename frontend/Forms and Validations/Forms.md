<form action="/action_page.php" method="post" enctype="multipart/form-data">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form>

## attributes:

1. target:
   \_blank The response is displayed in a new window or tab
   \_self The response is displayed in the current window
   \_parent The response is displayed in the parent frame
   \_top The response is displayed in the full body of the window
   framename The response is displayed in a named iframe

2. method: get/post

The method attribute specifies the HTTP method to be used when submitting the form data.

The form-data can be sent as URL variables (with method="get") or as HTTP post transaction (with method="post").

The default HTTP method when submitting form data is GET.

ex: <form action="/action_page.php" method="post">

3. autocomplete on/off

The autocomplete attribute specifies whether a form should have autocomplete on or off.

When autocomplete is on, the browser automatically complete values based on values that the user has entered before.

4. novalidate

The novalidate attribute is a boolean attribute.

When present, it specifies that the form-data (input) should not be validated when submitted.

ex: <form action="/action_page.php" novalidate>

5. enctype : (when method is post)

Value Description
a. application/x-www-form-urlencoded Default. All characters are encoded before sent (spaces are converted to "+" symbols, and special characters are converted to ASCII HEX values)
b. multipart/form-data This value is necessary if the user will upload a file through the form
c. text/plain Sends data without any encoding at all. Not recommended

form elements

<input> type="text" id="fname" name="fname" maxlength="4" size="4" value="John" disabled(value wont be sent with form)/readonly placeholder="123-45-678" autofocus autocomplete="off"
validation::

> > required
> > type="file" id="files" name="files" multiple
> > type="number" id="quantity" name="quantity" min="1" max="10" step="2"
> > pattern="[A-Za-z ]{3}" title="Three letter country code"
> > type="date" id="datemax" name="datemax" max="1979-12-31"

<label> for="fname"
<select> id="cars" name="cars" multiple
<textarea> name="message" rows="10" cols="30"
<button> type="button" onclick="alert('Hello World!')"

<fieldset> The <fieldset> element is used to group related data in a form. (Wrapper)
<legend> 
<datalist>
<output>
<option> value="fiat" selected
<optgroup>

## form constraint validation api

<input pattern="[A-Za-z ]{3}" title="Three letter country code">

const nameInput = document.querySelector('input');

nameInput.addEventListener('input', () => {
nameInput.setCustomValidity(''); // Sets a custom error message string to be shown to the user upon submitting the form, explaining why the value is not valid
nameInput.checkValidity(); // Checks the element's value against its constraints. If the value is invalid, it fires an invalid event
});

nameInput.addEventListener('invalid', () => {
if(nameInput.value === '') {
nameInput.setCustomValidity('Enter your username!');
} else {
nameInput.setCustomValidity('Usernames can only contain upper and lowercase letters. Try again!');
}
});
