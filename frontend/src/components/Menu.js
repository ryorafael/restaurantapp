import React from "react";
import "../styles/dinnermenu.css";

const DinnerMenu = () => {
  return (
    <div>
      <h1>
        Le Fou Frog <br />
        La Carte du Soir
      </h1>
      <p>
        Welcome to Le Fou Frog. <br />
        We invite you to dine at this beloved institution dedicated to exquisite
        French cuisine, <br />
        prepared with inimitable style from scratch with only the finest,
        freshest ingredients. <br />
        In addition to the selections you see here, there are nightly specials
        handwritten on our famous chalkboards.
      </p>
      <div className="dinnermenu">
        <section>
          <h3>Les Soupes</h3>
          <article className="item">
            <p className="food">Soupe à l'oignon gratinée</p>
            <p className="description">
              Traditional French onion soup sweetened with Port wine and veal
              stock topped with a crouton and melted Gruyère and Parmesan
              cheeses
            </p>
            <p className="price">$12</p>
          </article>
          <article className="item">
            <p className="food">Bisque de Homard</p>
            <p className="description">
              A rich soup made of lobster stock flambéed with Cognac, and
              thickened with rice, tomato paste, cream and a touch of cayenne
            </p>
            <p className="price">$12</p>
          </article>
          <article className="item">
            <p className="food">Soupe du jour</p>
            <p className="description">
              Prepared from the season’s freshest ingredients. Please Inquire.
            </p>
            <p className="price">$10</p>
          </article>
        </section>
        <section>
          <hr />
          <h3>Les Salades</h3>
          <article className="item">
            <p className="food">Salade de la Maison</p>
            <p className="description">
              Mixed field greens tossed in a tangy citrus Dijon vinaigrette and
              topped with carrot ribbons
            </p>
            <p className="price">$10</p>
          </article>
          <article className="item">
            <p className="food">Salade de Betteraves et Roquette</p>
            <p className="description">
              Quartered beets dressed in lemon vinaigrette paired with orange
              segments, candied pecans, and spicy arugula tossed with balsamic
              vinaigrette
            </p>
            <p className="price">$12</p>
          </article>
          <article className="item">
            <p className="food">Salade de Chevre Chaud avec Figue</p>
            <p className="description">
              Warm goat cheese atop a crouton, fig compote, roasted peppers,
              field greens, and citrus vinaigrette
            </p>
            <p className="price">$14</p>
          </article>
          <hr />
          <h3>Les Hors D'Oeuvres</h3>
          <article className="items">
            <p className="food">Tartare de Thon*</p>
            <p className="description">
              Hand chopped sushi grade Ahi Tuna, shallots, soy sauce, Tabasco,
              sesame and chive oils, wasabi with seaweed salad and sesame seeds
            </p>
            <p className="price">$21</p>
          </article>
          <article className="items">
            <p className="food">Baked Brie en Croute</p>
            <p className="description">
              Baked Brie served in a puff pastry with seasonal compote
            </p>
            <p className="price">$16</p>
          </article>
          <article className="items">
            <p className="food">Escargots Provençales</p>
            <p className="description">
              Half dozen Helix Snails baked in butter, tomatoes, garlic and
              herbs
            </p>
            <p className="price">$15</p>
          </article>
          <article className="items">
            <p className="food">Foie Gras Frais</p>
            <p className="description">
              Seared Hudson Valley Foie Gras, veal demi-glace, coffee, vanilla,
              macadamia liqueur, macadamia nuts, with mango and raspberry coulis
            </p>
            <p className="price">$29</p>
          </article>
          <article className="items">
            <p className="food">Moules Marinières</p>
            <p className="description">
              Prince Edward Island Mussels steamed in a broth of white wine, bay
              leaf, mustard and cream
            </p>
            <p className="price">$20</p>
          </article>
          <article className="items">
            <p className="food">Coquilles St. Jacques</p>
            <p className="description">
              Bay Scallops, leeks, and mushrooms in a creamy white wine and
              Gruyère cheese sauce
            </p>
            <p className="price">$17</p>
          </article>
          <article className="items">
            <p className="food">Pommes Frites</p>
            <p className="description">The BEST French fries in Kansas City</p>
            <p className="price">Small / $10 Large / $15</p>
          </article>
        </section>
        <section>
          <hr />
          <h3>Végétarien Vegan</h3>
          <article className="items">
            <p className="food">Raviolis de Courge Musquée</p>
            <p className="description">
              Butternut squash ravioli in a brown butter sage sauce with red
              cabbage, beets and Brussels sprouts
            </p>
            <p className="price">$31</p>
          </article>
          <article className="items">
            <p className="food">Tajine Végétarien</p>
            <p className="description">
              Vegetable Tagine made with eggplant, onions zucchini, yellow
              squash, chickpeas, dried fruit, almonds, walnuts, bell pepper and
              exotic spices on a bed of lime infused quinoa
            </p>
            <p className="price">$28</p>
          </article>
        </section>
        <section>
          <hr />
          <h3>Les Poissons</h3>
          <article className="items">
            <p className="food">Saumon écossais</p>
            <p className="description">
              Pan seared Salmon with a creamy gooseberry sauce, orange confit
              topped with spicy arugula and served with fried potatoes
            </p>
            <p className="price">$32</p>
          </article>
          <article className="items">
            <p className="food">Gnocchi fruits de mer sauce armoricaine</p>
            <p className="description">
              A seafood medley of mussels, crayfish, shrimp, and bay Scallops in
              a shellfish, tomato, cream sauce with potato gnocchi
            </p>
            <p className="price">$29</p>
          </article>
        </section>
        <section>
          <hr />
          <h3>Les Viandes et Volailles</h3>
          <article className="items">
            <p className="food">Médaillons de porc enrobé de bacon</p>
            <p className="description">
              Pork Loin Medaillons wrapped in bacon and seared, with a dark
              balsamic pork stock reduction with caramelized shallots, served
              with mashed potatoes and sautéed vegetables
            </p>
            <p className="price">$32</p>
          </article>
          <article className="items">
            <p className="food">Steak au Poivre*</p>
            <p className="description">
              Kansas City Strip Steak pan seared, flambéed in Cognac with
              Madagascar green peppercorns, veal demi glace and cream, served
              with pommes frites and mixed field greens.
            </p>
            <p className="price">$53</p>
          </article>
          <article className="items">
            <p className="food">Filet le Fou*</p>
            <p className="description">
              Filet Mignon paired with lobster meat with a Boursin Sabayon,
              served with Dauphine potatoes and grilled asparagus
            </p>
            <p className="price">$64</p>
          </article>
          <article className="items">
            <p className="food">Caille Farci</p>
            <p className="description">
              Quail stuffed with brioche and foie gras, grilled and finished in
              the oven. Sauce Perigourdine made with game stock, truffles, foie
              gras, and Madeira wine. Served with mashed potatoes and
              vegetables.
            </p>
            <p className="price">$41</p>
          </article>
        </section>
      </div>
      <section>
        <h3>For Your Health</h3>
        <p className="health">
          <em>
            *According to the KC Health Department, the consumption of raw
            and/or under cooked meat, poultry, seafood, shellfish or eggs may
            increase your risk of food-borne illness.
          </em>
        </p>
      </section>
      <footer>400 E. 5th Street Kansas City, MO 64106 816-474-6060</footer>
    </div>
  );
};

export default DinnerMenu;
