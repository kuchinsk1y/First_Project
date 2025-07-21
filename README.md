<h2>📍 HousingMap — interactive map of real estate listings</h2>
<p><strong>HousingMap</strong> — is a single-page web application for posting and viewing real estate listings on an interactive map. Users can post their own listings, add photos and avatars, and view others' listings filtered by various criteria.</p>

<h2>🚀 Possibilities</h2>
<ul>
  <li>📌 Placement of pins on the map by coordinates</li>
  <li>🧾 Creating ads using a form</li>
  <li>📷 Upload user avatar and housing photos</li>
  <li>🗂️ Flexible ad filtering:
    <ul>
      <li>type of housing</li>
      <li>price</li>
      <li>number of rooms/guests</li>
      <li>amenities (Wi-Fi, parking, etc.)</li>
    </ul>
  </li>
  <li>🗑️ Automatically hide irrelevant pins when filtering</li>
  <li>✅ Checking the validity of a form before sending it</li>
</ul>

<h2>🧠 Technologies</h2>

<h3>🖥️ Frontend</h3>
<ul>
  <li><strong>HTML5 / CSS3 / JavaScript (ES6)</strong> — building the interface and logic of the application</li>
  <li><strong>Leaflet.js</strong> — library for displaying an interactive map</li>
  <li><strong>Web API:</strong>
    <ul>
      <li><code>FileReader</code> — Loading and previewing images</li>
      <li><code>FormData</code> — working with forms and sending data to the server</li>
    </ul>
  </li>
</ul>

<h3>🔧 Backend</h3>
<ul>
  <li><strong>Node.js</strong> — JavaScript runtime on the server</li>
  <li><strong>Express.js</strong> — a minimalist framework for building APIs:
    <ul>
      <li><code>GET /offer</code> — getting a list of advertisements</li>
      <li><code>POST /offer</code> — adding a new ad</li>
    </ul>
  </li>
  <li><strong>In-memory storage</strong> or <strong>JSON file</strong> is a simple implementation of data storage (can be replaced with a full-fledged database if necessary)</li>
</ul>

<h2>📦 Installation</h2>
<pre><code>git clone https://github.com/your-username/housing-map.git
cd housing-map
npm install
</code></pre>

<h2>🔧 Starting the server</h2>
<pre><code>node server/server.js
</code></pre>

<h2>📂 Project structure</h2>
<pre><code>📦 housing-map
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── map.js
│   ├── form.js
│   ├── filters.js
│   ├── api.js
│   └── utils.js
├── img/
│   └── avatars/
├── server/
│   └── server.js
├── db.json
└── README.md
</code></pre>

<h2>✍️ How to add a listing</h2>
<ol>
<li>Drag the main pin on the map to the desired location.</li>
<li>Fill out the form: title, price, type of accommodation, rooms, guests and amenities.</li>
<li>Upload an image of the accommodation and an avatar.</li>
<li>Click the <strong>"Publish"</strong> button.</li>
<li>The listing will be displayed on the map and sent to the server.</li>
</ol>

<h2>📌 Notes</h2>
<ul>
  <li>Forms are automatically validated by type of accommodation, price and number of guests.</li>
  <li>If there is an error loading data, a corresponding message is displayed.</li>
  <li>Accommodation images and avatars are converted to <code>base64</code> before sending.</li>
</ul>
