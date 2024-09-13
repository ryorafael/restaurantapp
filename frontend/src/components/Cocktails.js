import React from "react";
import styles from "../styles/Cocktails.module.css";

const Cocktails = () => {
  return (
    <div>
      <h1 className={styles.title}>
        Le Fou Frog <br /> Carte Des Cocktails
      </h1>
      <p className={styles.description}>
        Le Fou Frog's cocktail list features a selection inspired by classic
        meets deliciousness with a little Frog ingenuity mixed in. Our liquid
        concoctions can make the perfect addition to your dining experience. Not
        sure what drink to pair your meal with? A member of our staff would be
        more than happy to help you decide.
      </p>
      <div className={styles.menuFrame}>
        <section>
          <h3 className={styles.sectionTitle}>Cocktails</h3>
          <article className={styles.item}>
            <p className={styles.drink}>L'Autobus</p>
            <p className={styles.description}>
              Yu Gin, Cartron Pamplemousse Liqueur, Sanpellegrino Limonata
            </p>
            <p className={styles.price}>$12</p>
          </article>
          <article className={styles.item}>
            <p className={styles.drink}>Transfusion</p>
            <p className={styles.description}>
              Vodka, Concord Grape Juice, Lime Juice and Ginger Ale
            </p>
            <p className={styles.price}>$10</p>
          </article>
          <article className={styles.item}>
            <p className={styles.drink}>Princess Stephie</p>
            <p className={styles.description}>
              Ciroc Coconut Vodka, Pineapple Juice, Grenadine
            </p>
            <p className={styles.price}>$12</p>
          </article>
          <article className={styles.item}>
            <p className={styles.drink}>Ginger Peach Sangria</p>
            <p className={styles.description}>
              White Wine, Ginger Liqueur, Brandy, Peach Nectar
            </p>
            <p className={styles.price}>$10</p>
          </article>
          <article className={styles.item}>
            <p className={styles.drink}>Cantarita</p>
            <p className={styles.description}>
              Tequila, Canton, Triple Sec, Fresh Lime
            </p>
            <p className={styles.price}>$12</p>
          </article>
          <article className={styles.item}>
            <p className={styles.drink}>Haut Mano</p>
            <p className={styles.description}>
              Una Famila Reposado, Simple Syrup, Lemon Juice, Red Wine
            </p>
            <p className={styles.price}>$12</p>
          </article>
          <article className={styles.item}>
            <p className={styles.drink}>Bisous Rouge</p>
            <p className={styles.description}>
              Scotch, Drambuie, Splash Cranberry Juice, Splash Soda
            </p>
            <p className={styles.price}>$12</p>
          </article>
          <article className={styles.item}>
            <p className={styles.drink}>Jo's Fired</p>
            <p className={styles.description}>
              Cinnamon-infused Tequila, Orange Soda, Bitters
            </p>
            <p className={styles.price}>$12</p>
          </article>
          <article className={styles.item}>
            <p className={styles.drink}>Sonya's Solution</p>
            <p className={styles.description}>
              Elijah Craig Bourbon, Cointreau, Bitters & Bubbles
            </p>
            <p className={styles.price}>$12</p>
          </article>
        </section>

        <hr className={styles.separator} />

        <section>
          <h3 className={styles.sectionTitle}>Martinis</h3>
          <article className={styles.item}>
            <p className={styles.drink}>French Martini</p>
            <p className={styles.description}>
              Vodka, Raspberry Liqueur, Pineapple Juice, Champagne
            </p>
            <p className={styles.price}>$12</p>
          </article>
          <article className={styles.item}>
            <p className={styles.drink}>French 69</p>
            <p className={styles.description}>
              Citadelle Gin, Big O Ginger Liqueur, Lemon Juice, Topped With
              Champagne
            </p>
            <p className={styles.price}>$12</p>
          </article>
          <article className={styles.item}>
            <p className={styles.drink}>French 75</p>
            <p className={styles.description}>
              Citadelle Gin, Lemon Juice & Simple Syrup, Topped With Champagne
            </p>
            <p className={styles.price}>$12</p>
          </article>
          <article className={styles.item}>
            <p className={styles.drink}>Pomegranate Martini</p>
            <p className={styles.description}>
              360 Lemoncello Vodka, Pama Liqueur, Splash Cranberry Juice
            </p>
            <p className={styles.price}>$12</p>
          </article>
          <article className={styles.item}>
            <p className={styles.drink}>Vesper</p>
            <p className={styles.description}>
              Citadelle Gin, Grey Goose Vodka, White Lillet, Lemon Twist
            </p>
            <p className={styles.price}>$12</p>
          </article>
          <article className={styles.item}>
            <p className={styles.drink}>Franhattan</p>
            <p className={styles.description}>
              Elijah Craig Rye, Byrh, Bitters, Cherry
            </p>
            <p className={styles.price}>$12</p>
          </article>
        </section>

        <hr className={styles.separator} />

        <section>
          <h3 className={styles.sectionTitle}>Mocktails</h3>
          <article className={styles.item}>
            <p className={styles.drink}>Cran-O Frizzante</p>
            <p className={styles.description}>
              Sanpellegrino Aranciata, Splash Cranberry Juice, Orange Bitters,
              Spicy Cherry
            </p>
            <p className={styles.price}>$5</p>
          </article>
          <article className={styles.item}>
            <p className={styles.drink}>Peach Refresher</p>
            <p className={styles.description}>
              Peach Nectar, Grenadine, Sprite and Soda
            </p>
            <p className={styles.price}>$5</p>
          </article>
          <article className={styles.item}>
            <p className={styles.drink}>Pineapple Ginger Mocktini</p>
            <p className={styles.description}>
              Shaken Pineapple Juice, Angostura Bitters, Topped with Ginger
              Beer, Served Up
            </p>
            <p className={styles.price}>$7</p>
          </article>
          <p className={styles.ask}>ASK ABOUT OUR NON-ALCOHOLIC SPIRITS</p>
        </section>

        <hr className={styles.separator} />

        <section>
          <h3 className={styles.sectionTitle}>Bubbles</h3>
          <article className={styles.item}>
            <p className={styles.drink}>Kir Royal (Cassis)</p>
            <p className={styles.price}>$10</p>
          </article>
          <article className={styles.item}>
            <p className={styles.drink}>Kir Imperial (Raspberry)</p>
            <p className={styles.price}>$10</p>
          </article>
          <article className={styles.item}>
            <p className={styles.drink}>Kir Peche (Peach)</p>
            <p className={styles.price}>$10</p>
          </article>
          <article className={styles.item}>
            <p className={styles.drink}>Kir Gingembre (Ginger)</p>
            <p className={styles.price}>$10</p>
          </article>
          <article className={styles.item}>
            <p className={styles.drink}>Kir Poire (Pear)</p>
            <p className={styles.price}>$10</p>
          </article>
          <article className={styles.item}>
            <p className={styles.drink}>Kir Violette (Violet)</p>
            <p className={styles.price}>$10</p>
          </article>
          <article className={styles.item}>
            <p className={styles.drink}>Kir St. Germaine (Elderflowers)</p>
            <p className={styles.price}>$10</p>
          </article>
          <article className={styles.item}>
            <p className={styles.drink}>Kir Pamplemousse (Grapefruit)</p>
            <p className={styles.price}>$10</p>
          </article>
          <article className={styles.item}>
            <p className={styles.drink}>Mimosa (Orange Juice)</p>
            <p className={styles.price}>$10</p>
          </article>
          <article className={styles.item}>
            <p className={styles.drink}>
              Champagne Cocktail (Sugar Cube & Bitters)
            </p>
            <p className={styles.price}>$10</p>
          </article>
          <article className={styles.item}>
            <p className={styles.drink}>
              Champagne Supernova (Sugar Cube & Violette)
            </p>
            <p className={styles.price}>$10</p>
          </article>
        </section>

        <hr className={styles.separator} />

        <section>
          <h3 className={styles.sectionTitle}>Traditional French Aperitifs</h3>
          <article className={styles.item}>
            <p className={styles.drink}>Absinthe</p>
            <p className={styles.price}>$14</p>
          </article>
          <article className={styles.item}>
            <p className={styles.drink}>
              Aperol Spritz: Aperol, Soda, Sprite, Bubbles
            </p>
            <p className={styles.price}>$12</p>
          </article>
          <article className={styles.item}>
            <p className={styles.drink}>Lillet: Blanc, Rouge, Rosé</p>
            <p className={styles.price}>$7</p>
          </article>
          <article className={styles.item}>
            <p className={styles.drink}>Pastis: Ricard, Pernod, Mauresque</p>
            <p className={styles.price}>$7</p>
          </article>
          <article className={styles.item}>
            <p className={styles.drink}>Bordiga Vermouth Bianco</p>
          </article>
          <article className={styles.item}>
            <p className={styles.drink}>Byrh</p>
          </article>
          <article className={styles.item}>
            <p className={styles.drink}>Kir</p>
          </article>
          <article className={styles.item}>
            <p className={styles.drink}>Maurin</p>
          </article>
          <article className={styles.item}>
            <p className={styles.drink}>Red Dubonnet</p>
          </article>
          <article className={styles.item}>
            <p className={styles.drink}>Salers</p>
          </article>
          <article className={styles.item}>
            <p className={styles.drink}>Suze</p>
          </article>
          <article className={styles.item}>
            <p className={styles.price}>$7</p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Cocktails;
