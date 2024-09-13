import React from "react";
import styles from "../styles/Dessert.module.css";

const Dessert = () => {
  return (
    <div>
      <h1 className={styles.title}>
        Le Fou Frog <br /> Les Desserts & Boissons
      </h1>

      {/* Dessert menu content starts here */}
      <div className={styles.menuFrame}>
        <section>
          <h3 className={styles.sectionTitle}>Les Desserts</h3>
          <article className={styles.item}>
            <p className={styles.food}>Profiterole</p>
            <p className={styles.description}>
              Pâte à choux pastry with vanilla ice cream topped with dark
              chocolate sauce and toasted almonds
            </p>
            <p className={styles.price}>$12</p>
          </article>
          <article className={styles.item}>
            <p className={styles.food}>Crème Brûlée</p>
            <p className={styles.description}>
              Vanilla bean custard topped with caramelized sugar
            </p>
            <p className={styles.price}>$12</p>
          </article>
          <article className={styles.item}>
            <p className={styles.food}>Mousse au chocolat</p>
            <p className={styles.description}>
              Rich and creamy chocolate mousse in a chocolate shell atop
              flourless chocolate cake
            </p>
            <p className={styles.price}>$12</p>
          </article>
        </section>

        <hr className={styles.separator} />

        <section>
          <h3 className={styles.sectionTitle}>Cordials et Liqueurs</h3>

          <article className={styles.item}>
            <p className={styles.food}>St. Germaine</p>
            <p className={styles.price}>$9</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>
              Frambooise/Peche/Poire/Cassis Liqueur, Mathilde
            </p>
            <p className={styles.price}>$8</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Crème de Violette</p>
            <p className={styles.price}>$9</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Pamplemousse Rose, Cartron</p>
            <p className={styles.price}>$9</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Canton</p>
            <p className={styles.price}>$9</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>The Big O Ginger Liqueur</p>
            <p className={styles.price}>$9</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Grand Marnier</p>
            <p className={styles.price}>$12</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Baileys</p>
            <p className={styles.price}>$8</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Kahlua</p>
            <p className={styles.price}>$7</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Drambuie</p>
            <p className={styles.price}>$9</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Frangelico</p>
            <p className={styles.price}>$8</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Sambuca Black</p>
            <p className={styles.price}>$9</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Tuaca</p>
            <p className={styles.price}>$9</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Amaretto Di Sarrano</p>
            <p className={styles.price}>$8</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Cointreau</p>
            <p className={styles.price}>$8</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Absinthe</p>
            <p className={styles.price}>$14</p>
          </article>
        </section>

        <hr className={styles.separator} />

        <section>
          <h3 className={styles.sectionTitle}>
            Hot and Cold Beverages (non-alcoholic)
          </h3>

          <article className={styles.item}>
            <p className={styles.food}>Coffee</p>
            <p className={styles.price}>$3</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Decaf</p>
            <p className={styles.price}>$3</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Espresso</p>
            <p className={styles.price}>$4</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Double Espresso</p>
            <p className={styles.price}>$6</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Cappuccino</p>
            <p className={styles.price}>$7</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Hot Tea</p>
            <p className={styles.price}>$3</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Ice Tea</p>
            <p className={styles.price}>$2.50</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Soda</p>
            <p className={styles.price}>$2.50</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Juice</p>
            <p className={styles.price}>$2.50</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>
              Sparkling Mineral Water - Sanpellegrino
            </p>
            <p className={styles.price}>$5,7,9</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Sparkling Limonata - Sanpellegrino</p>
            <p className={styles.price}>$5</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Sparkling Aranciata</p>
            <p className={styles.price}>$5</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Peach Refresher Mocktail</p>
            <p className={styles.price}>$5</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Cran-O Frizzante Mocktail</p>
            <p className={styles.price}>$5</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Pineapple Ginger Mocktini</p>
            <p className={styles.price}>$7</p>
          </article>
        </section>

        <hr className={styles.separator} />

        <section>
          <h3 className={styles.sectionTitle}>Coffee Drinks</h3>

          <article className={styles.item}>
            <p className={styles.food}>Café Irlandes</p>
            <p className={styles.description}>
              Jameson Irish Whiskey and Coffee
            </p>
            <p className={styles.price}>$10</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Nutty Irishman</p>
            <p className={styles.description}>
              Baileys Irish Cream, Frangelico and Coffee
            </p>
            <p className={styles.price}>$10</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Café L'Orange</p>
            <p className={styles.description}>Orange Xo Liqueur and Coffee</p>
            <p className={styles.price}>$10</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Café Français</p>
            <p className={styles.description}>Cognac and Coffee</p>
            <p className={styles.price}>$10</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>French Kiss</p>
            <p className={styles.description}>
              Crème de Menthe, Cognac, Coffee
            </p>
            <p className={styles.price}>$10</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Café Tuaca</p>
            <p className={styles.description}>
              Tuaca (Brandy, Orange and Vanilla) and Coffee
            </p>
            <p className={styles.price}>$10</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Serving The Roasterie's</p>
            <p className={styles.description}>Le Fou Frog Blend with Chicory</p>
            <p className={styles.price}>$10</p>
          </article>
        </section>

        <hr className={styles.separator} />

        <section>
          <h3 className={styles.sectionTitle}>Dessert Martinis</h3>

          <article className={styles.item}>
            <p className={styles.food}>Chocolate Martini</p>
            <p className={styles.description}>
              Vodka, Prichard's Fudge Brownie Cream Liqueur
            </p>
            <p className={styles.price}>$12</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Chocolate Raspberry Martini</p>
            <p className={styles.description}>
              Vodka, Prichard's Fudge Brownie Cream Liqueur, Framboise Liqueur
            </p>
            <p className={styles.price}>$12</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Chocolate Caramel Martini</p>
            <p className={styles.description}>
              Pinnacle Salted Caramel Vodka, Prichard's Fudge Brownie Cream
              Liqueur
            </p>
            <p className={styles.price}>$12</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Espresso Martini</p>
            <p className={styles.description}>
              Vodka, Kahluan Espresso, Baileys Irish Cream
            </p>
            <p className={styles.price}>$12</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Thin Mint</p>
            <p className={styles.description}>
              Vodka, Prichard's Fudge Brownie Cream Liqueur, Creme De Menthe
            </p>
            <p className={styles.price}>$12</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Pumpkin Spice Martini</p>
            <p className={styles.description}>
              Vodka, Pumpkin Liqueur, Big O Ginger
            </p>
            <p className={styles.price}>$12</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>White Chocolate Peppermint Martini</p>
            <p className={styles.description}>
              Vodka, White Chocolate Liqueur, Peppermint Schnapps
            </p>
            <p className={styles.price}>$12</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Tarte Tatini</p>
            <p className={styles.description}>
              Tarte Tatin in a glass - Amarula Cream Liqueur, Apple & Salted
              Caramel Vodka
            </p>
            <p className={styles.price}>$12</p>
          </article>
        </section>

        <hr className={styles.separator} />

        <section>
          <h3 className={styles.sectionTitle}>Digestifs</h3>

          <article className={styles.item}>
            <p className={styles.food}>Benedictine & Brandy</p>
            <p className={styles.price}>$9</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Benedictine</p>
            <p className={styles.price}>$8</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Chartreuse Vert</p>
            <p className={styles.price}>$25</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Camus VS, Cognac</p>
            <p className={styles.price}>$10</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Camus VSOP, Cognac</p>
            <p className={styles.price}>$12</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Courvoisier VS, Cognac</p>
            <p className={styles.price}>$13</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Hennessy VS, Cognac</p>
            <p className={styles.price}>$14</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Remy Martin VSOP, Cognac</p>
            <p className={styles.price}>$15</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Puysegur, Bas Armagnac</p>
            <p className={styles.price}>$13</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>La Tariquet VSOP, Armagnac</p>
            <p className={styles.price}>$15</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Family Dupont, Fine, Calvados</p>
            <p className={styles.price}>$15</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Family Dupont, Cream, Calvados</p>
            <p className={styles.price}>$15</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Centum Herbis</p>
            <p className={styles.price}>$10</p>
          </article>
        </section>

        <hr className={styles.separator} />
        <section>
          <h3 className={styles.sectionTitle}>Port, Sherry, Wine</h3>

          <article className={styles.item}>
            <p className={styles.food}>Porto, Ramos Pinto 10YR Tawny</p>
            <p className={styles.price}>$13</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Porto, Ramos Pinto 20YR Tawny</p>
            <p className={styles.price}>$17</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Porto, Quinta De Noval Ruby</p>
            <p className={styles.price}>$9</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Porto, Quinta De Noval Tawny</p>
            <p className={styles.price}>$10</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Porto, Quinta De Noval LBV</p>
            <p className={styles.price}>$12</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Porto, Fonseca Bin #27</p>
            <p className={styles.price}>$10</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Porto, Nieport Dry White</p>
            <p className={styles.price}>$9</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Porto, Nieport 10 YR Tawny</p>
            <p className={styles.price}>$13</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Porto, Nieport 20 YR Tawny</p>
            <p className={styles.price}>$17</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Sherry Fino, Barbadillo</p>
            <p className={styles.price}>$9</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Banyuls, Chapoutier</p>
            <p className={styles.price}>$10</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>Porto, Broadbent White</p>
            <p className={styles.price}>$8</p>
          </article>

          <article className={styles.item}>
            <p className={styles.food}>
              Domaine De Durban, Muscat De Beaumes-De Venise
            </p>
            <p className={styles.price}>$10/32</p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Dessert;
