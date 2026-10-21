# How to Edit Your Site

Hi Colleen! This site is designed to be very easy for you to update yourself. All the main content is stored in a single file.

## 1. Updating Text & Images
Open the file at `src/config/content.ts`. You will see blocks for the **site**, **book**, **author**, and **gallery**.

- **Text:** To change a title, bio, or description, simply update the text inside the quotation marks.
- **Images:** To change an image, upload your new image to the `public/assets/` folder and update the path in the content file (e.g., `"/assets/my-new-photo.jpg"`).

## 2. Managing the Gallery
In the `gallery` section of the content file, you can add new pieces or remove old ones:
- To add: Copy an existing block and change the `id`, `title`, and `image` path.
- To remove: Delete the block for that specific piece.

## 3. Contact Form
The contact form is pre-configured to collect the sender's role (Parent, Gallery, etc.). When you're ready to connect it to an email service, a developer can help you link the "submit" action to a tool like Formspree or Netlify Forms.

## 4. Deployment
This site is built with React and Vite. You can deploy it easily to platforms like **Vercel**, **Netlify**, or **GitHub Pages**. Simply connect your GitHub repository and it will handle the rest!

Enjoy your new coastal home on the web!
