import React from "react";
import styles from "../styles/WineMenu.module.css";

const WineMenu = () => {
  return (
    <>
      <h1 className="winemenuHeader">
        Le Fou Frog <br />
        La Carte des Vins
      </h1>
      <p>
        All of the wines offered at Le Fou Frog <br />
        are imported from France and carefully chosen to complement our cuisine{" "}
        <br />
        in order to bring our guests a truly French gastronomic experience.
      </p>
      <div className={styles["winelist"]}>
        <section>
          <h3>Vins de la Maison - Blancs & Roses</h3>
          <article className={styles.item}>
            <p className={styles.food}>Arrogant Frog</p>
            <p className={styles.description}>Chardonnay</p>
            <p className={styles.price}>8/28</p>
          </article>
          <article className={styles.item}>
            <p className={styles.food}>La Vielle Ferme</p>
            <p className={styles.description}>Rosé</p>
            <p className={styles.price}>8/28</p>
          </article>
          <article className={styles.item}>
            <p className={styles.food}>La Petite Perriere</p>
            <p className={styles.description}>Sauvignon Blanc</p>
            <p className={styles.price}>8/28</p>
          </article>
          <article className={styles.item}>
            <p className={styles.food}>Jérémie Huchet 'Chauvinière'</p>
            <p className={styles.description}>Muscadet</p>
            <p className={styles.price}>9/32</p>
          </article>
          <article className={styles.item}>
            <p className={styles.food}>Chateau Lamothe</p>
            <p className={styles.description}>Bordeaux Blanc</p>
            <p className={styles.price}>10/36</p>
          </article>
          <article className={styles.item}>
            <p className={styles.food}>Heinz Eifel</p>
            <p className={styles.description}>Riesling</p>
            <p className={styles.price}>10/36</p>
          </article>
          <article className={styles.item}>
            <p className={styles.food}>Keuntz Bas</p>
            <p className={styles.description}>White Blend Alsace</p>
            <p className={styles.price}>11/40</p>
          </article>
          <article className={styles.item}>
            <p className={styles.food}>Les Lys</p>
            <p className={styles.description}>Vouvray</p>
            <p className={styles.price}>11/40</p>
          </article>
          <article className={styles.item}>
            <p className={styles.food}>Guigal</p>
            <p className={styles.description}>Cotes Du Rhone Blanc</p>
            <p className={styles.price}>11/40</p>
          </article>
          <article className={styles.item}>
            <p className={styles.food}>LaRochette</p>
            <p className={styles.description}>Macon Fuissé Chardonnay</p>
            <p className={styles.price}>12/44</p>
          </article>
          <article className={styles.item}>
            <p className={styles.food}>Rosé Du Jour</p>
            <p className={styles.price}>12/44</p>
          </article>
          <article className={styles.item}>
            <p className={styles.food}>Giesen (Non-Alcoholic)</p>
            <p className={styles.description}>Sauvignon Blanc</p>
            <p className={styles.price}>12/44</p>
          </article>
        </section>
        <section>
          <hr />
          <h3>Vins de la Maison - Rouges</h3>
          <article className={styles.item}>
            <p className={styles.food}>Maison Nicolas</p>
            <p className={styles.description}>Merlot</p>
            <p className={styles.price}>8/28</p>
          </article>
          <article className={styles.item}>
            <p className={styles.food}>Domaine De Cristia</p>
            <p className={styles.description}>Grenache</p>
            <p className={styles.price}>10/36</p>
          </article>
          <article className={styles.item}>
            <p className={styles.food}>St. Cosme Little James' Basket Press</p>
            <p className={styles.description}>Grenache</p>
            <p className={styles.price}>11/40</p>
          </article>
          <article className={styles.item}>
            <p className={styles.food}>Solis</p>
            <p className={styles.description}>Malbec Cahors</p>
            <p className={styles.price}>12/44</p>
          </article>
          <article className={styles.item}>
            <p className={styles.food}>
              Domaine Les Gryphées Cuvée Centaire Les Balmes
            </p>
            <p className={styles.description}>Beaujolais</p>
            <p className={styles.price}>12/44</p>
          </article>
          <article className={styles.item}>
            <p className={styles.food}>Château Haut-La-Péreyre</p>
            <p className={styles.description}>Bordeaux Supérieur</p>
            <p className={styles.price}>13/48</p>
          </article>
          <article className={styles.item}>
            <p className={styles.food}>Delas St. Esprit Côtes Du Rhône</p>
            <p className={styles.price}>13/48</p>
          </article>
          <article className={styles.item}>
            <p className={styles.food}>Bichot Horizon</p>
            <p className={styles.description}>Pinot Noir</p>
            <p className={styles.price}>13/48</p>
          </article>
          <article className={styles.item}>
            <p className={styles.food}>Barrail</p>
            <p className={styles.description}>Medoc Bordeaux Rouge</p>
            <p className={styles.price}>13/48</p>
          </article>
          <hr />
          <h3>Champagne</h3>
          <article className={styles.item}>
            <p className={styles.food}>Saint Hilaire Brut</p>
            <p className={styles.description}>
              The original sparkling wine of France.
            </p>
            <p className={styles.price}>10/45</p>
          </article>
          <article className={styles.item}>
            <p className={styles.food}>François Montand, Brut NV</p>
            <p className={styles.description}>
              A great bubbly at a great price. Toasty and creamy.
            </p>
            <p className={styles.price}>12/55</p>
          </article>
          <article className={styles.item}>
            <p className={styles.food}>Charles Bove "Tourraine" Rosé NV</p>
            <p className={styles.description}>
              Cabernet Franc and Gamay. Pretty nose of strawberry and ripe
              peach.
            </p>
            <p className={styles.price}>13/60</p>
          </article>
          <article className={styles.item}>
            <p className={styles.food}>Serena Brachetto D'Acqui</p>
            <p className={styles.description}>Sweet, fruity frizzante.</p>
            <p className={styles.price}>8/35</p>
          </article>
          <article className={styles.item}>
            <p className={styles.food}>
              Champagne, Legras & Haas Intuition Brut NV
            </p>
            <p className={styles.description}>
              Growers Champagne. Elegant with hints of elderflower, ripe
              apricot, salted almond, and graphite.
            </p>
            <p className={styles.price}>$70</p>
          </article>
          <article className={styles.item}>
            <p className={styles.food}>Champagne, Philippe Prié Brut Rosé</p>
            <p className={styles.description}>
              This Growers Brut Rosé is a flat-out delicious Champagne with a
              deep pink color. It bursts open with pretty aromas of freshly
              sliced strawberries, rose petal, cherry blossom, and hints of
              brioche.
            </p>
            <p className={styles.price}>$85</p>
          </article>
          <article className={styles.item}>
            <p className={styles.food}>
              G. Bertrand Ballerine Brut Etoilé Rosé NV
            </p>
            <p className={styles.description}>
              A true staff favorite, this delicate pale rosé is deeply aromatic,
              with tiny bubbles, it tastes like toasted strawberries and cream.
              “Every time a cork pops, a dancer gets a job” - B.R.
            </p>
            <p className={styles.price}>$95</p>
          </article>
          <article className={styles.item}>
            <p className={styles.food}>
              Champagne Veuve Clicquot, Yellow Label
            </p>
            <p className={styles.description}>
              Classic. Superb. Even more intensity than before. Celebrate!
            </p>
            <p className={styles.price}>$110</p>
          </article>
          <article className={styles.item}>
            <p className={styles.food}>Champagne Paul Bara Rosé NV</p>
            <p className={styles.description}>
              A beautiful small production bottle of bubbles brought to you by
              the one and only Kermit Lynch.
            </p>
            <p className={styles.price}>$115</p>
          </article>
          <article className={styles.item}>
            <p className={styles.food}>
              Champagne, Laurent-Perrier Brut Cuvée Rosé
            </p>
            <p className={styles.description}>
              100% Pinot Noir from 10 different “Cru.” A Grand Champagne with
              great color and finesse. Hints of strawberry, dry with perfect
              bubbles.
            </p>
            <p className={styles.price}>$150</p>
          </article>
          <article className={styles.item}>
            <p className={styles.food}>
              Champagne, Laurent-Perrier Grand Siècle
            </p>
            <p className={styles.description}>
              Grand Siècle is the only Cuvée de Prestige based on the blend and
              not on the vintage. Grand Siècle recreates the perfect year at
              each new iteration. A blend of Chardonnay and Pinot Noir, it is
              our Pastry Chef Carter Holton’s favorite.
            </p>
            <p className={styles.price}>$350</p>
          </article>
          <article className={styles.item}>
            <p className={styles.food}>Champagne, Louis Roederer Cristal</p>
            <p className={styles.description}>Liquid Gold</p>
            <p className={styles.price}>$395</p>
          </article>
          <hr />
          <h3>Les Vins Blancs</h3>
          <section>
            <article className={styles.item}>
              <p className={styles.food}>
                Alsace, Domaine Pfister, Riesling Tradition
              </p>
              <p className={styles.description}>
                Honeyed nose with a razor sharp, saline palette and crisp, dry
                finish. Delicious, classic Alsatian Riesling
              </p>
              <p className={styles.price}>$50</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Loire, Pouilly-Fumé Cuvée Kriotine, Domaine Francis Blanchet
              </p>
              <p className={styles.description}>
                100% Sauvignon Blanc from the flinty soil of the Loire. Vibrant
                citrus, clean mineral-driven finish. Great with smoked meats,
                seafood, and cream sauces.
              </p>
              <p className={styles.price}>$55</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Loire, Sancerre, Reverdy Et Fils "Reine Blanche"
              </p>
              <p className={styles.description}>
                Elegant Sauvignon Blanc with crisp acidity and minerality,
                classic with shellfish and cream dishes.
              </p>
              <p className={styles.price}>$59</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Burgundy, Pouilly-Fuissé, Nicolas Potel
              </p>
              <p className={styles.description}>
                Crisp and lively with the aroma of roasted nuts, grilled
                pineapple, and a hint of matchstick. The flavor is supple,
                dry-yet-fruity medium body, with the taste of tangy green apple,
                chalk, and melon.
              </p>
              <p className={styles.price}>$78</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Burgundy, Auxey Duresses Domaine LaFouge
              </p>
              <p className={styles.description}>
                Perched in the western uplands alongside the famous
                Chardonnay-producing village of Meursault. Jean & Gilles Lafouge
                are the 6th generation of winemakers to run this small family
                Domaine, which is regularly cited as one of the top domaines of
                the appellation. Take a chance on me!
              </p>
              <p className={styles.price}>$92</p>
            </article>
            <article className="items">
              <p className={styles.food}>Burgundy, Meursault, Albert Bichot</p>
              <p className={styles.description}>
                Chardonnay with notes of candied lemon, almonds, white flowers
                and freshly baked bread.
              </p>
              <p className={styles.price}>$120</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Burgundy, Domaine Clos De La Chapelle Sous Freitelle
                Pernand-Vergelesses 1 Cru
              </p>
              <p className={styles.description}>
                100% Chardonnay, buttery and complex. The only American-owned
                Domaine in Burgundy and by KC native Mark McConnell.
              </p>
              <p className={styles.price}>$105</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Burgundy, Chassagne-Montrachet, Bouard-Bonnefoy
              </p>
              <p className={styles.description}>
                Chardonnay with classic flavors of yellow plums, mountain spring
                water and a touch of red berry fruit.
              </p>
              <p className={styles.price}>$165</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Chablis, Dominique & Romain Collet Chablist Grand Cru Valmur
                2021
              </p>
              <p className={styles.description}>
                Certified organic Chardonnay. Has depth and aromatic generosity,
                great minerality with a touch of floral and fruity elements.
              </p>
              <p className={styles.price}>$125</p>
            </article>
          </section>

          <section>
            <hr />
            <h3>Les Vins Roses</h3>
            <article className="items">
              <p className={styles.food}>Tavel Rosé, Chateau De Trinquevedel</p>
              <p className={styles.description}>
                Trinquevedel's Tavel is reminiscent of the divine freshness of a
                wild-harvested summer strawberry. Like the berries you might
                want to spoon atop a heaping pile of barely sweetened whipped
                cream, this rosé will be the star of, and finishing touch to,
                any meal.
              </p>
              <p className={styles.price}>$48</p>
            </article>
          </section>

          <section>
            <hr />
            <h3>Les Vins Rouges</h3>
            <article className="items">
              <p className={styles.food}>
                Burgundy, Nicolas Potel Bourgogne Rouge
              </p>
              <p className={styles.description}>
                Maison Nicolas Potel has built its international reputation by
                making Pinot Noir from the most beautiful vineyards of Burgundy.
              </p>
              <p className={styles.price}>$44</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Burgundy, Château De La Maltroye Bourgogne Rouge
              </p>
              <p className={styles.description}>
                One of the heralded addresses of Chassagne, the Domaine itself
                was built in the 18th century on top of a 400-year-old cellar,
                still in use today. This lovely Bourgogne Rouge shows expressive
                red fruits, liquid minerals, tar, red flowers, and a savory
                note. The palate is very dense and balanced with tons of dry
                extract and complex minerals kept in check by wonderfully
                integrated acidity.
              </p>
              <p className={styles.price}>$65</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Burgundy, Morey Saint Denis, Vielles Vignes Domaine Stephane
                Magnien
              </p>
              <p className={styles.description}>
                Rich full color, lush notes of raspberry and black cherry.
              </p>
              <p className={styles.price}>$92</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Burgundy, Pommard Domaine Germain Pere et Fils
              </p>
              <p className={styles.description}>
                100% Pinot Noir. This ruby colored wine has good mouthfeel with
                lithe body of tart cherry and strawberry balanced by acid.
              </p>
              <p className={styles.price}>$98</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Burgundy, Gevrey-Chambertin Domaine René Leclerc 'Clos Prieur'
                1Cru
              </p>
              <p className={styles.description}>
                Characteristic Gevrey are robust and powerful but at the same
                time, velvety and expressive. Black fruit, black liquorice and
                chocolate come into play. This little single vineyard offering
                tends to give very aromatic and charming red berries.
              </p>
              <p className={styles.price}>$112</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Burgundy, Volnay Bouzereau 1er "Les Aussy"
              </p>
              <p className={styles.description}>
                Fragrant on the nose with dark cherry and violet scents,
                well-delineated and just very Volnay in style. The palate is
                medium-bodied with crunchy red and black fruit.
              </p>
              <p className={styles.price}>$115</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Burgundy, Volnay 1er Cru Taillepieds, Domaine Clos De La
                Chapelle
              </p>
              <p className={styles.description}>
                A deft application of wood sets off ripe and fresh aromas of
                black berry liqueur and a beautiful array of spice elements with
                minerality and structure with a long finish.
              </p>
              <p className={styles.price}>$145</p>
            </article>
            <article className="items">
              <p className={styles.food}>Beaujolais, Morgan, Marcel Lapierre</p>
              <p className={styles.description}>
                100% Gamay, this combination of old vines, exceptional terroir
                and skilled winemaking have created pure velvet, a Lapierre
                trademark. Substance, flesh, and serious density are delivered
                with total finesse and seductiveness.
              </p>
              <p className={styles.price}>$62</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Bordeaux, Haut-Medoc, Chateau Beaumont
              </p>
              <p className={styles.description}>
                Great deep black fruits lead through to a lovely finish. Aromas
                of dark chocolate, blueberry, cassis, nutmeg, cinnamon, oak, and
                smoke. A delightful Cru Bourgeois Superieur. Impressive
              </p>
              <p className={styles.price}>$40</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Bordeaux, Medoc, Chateau Grand Bouchon
              </p>
              <p className={styles.description}>
                A mix of black fruits (black current, strawberry, blackberry),
                toast, and oak. Complex. Cabernet Sauvignon and Cabernet Franc
              </p>
              <p className={styles.price}>$40</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Bordeaux, Margaux Chateau Prieure Lichine
              </p>
              <p className={styles.description}>
                Floral and beautiful with blackberry and blackcurrant aromas.
                This is a classic 4th growth Chateau. Highly rated. 65%
                Cabernet, 30% Merlot, 5% Petit Verdot.
              </p>
              <p className={styles.price}>$125</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Bordeaux, Margaux Chateau D'Angludet
              </p>
              <p className={styles.description}>
                Delicate, restrained herbal savoriness, red cherries and fresh
                orange zest on the nose. Lightly intense on the palate with some
                ripe fruit sweetness, fine tannins, minerals, accessible and
                versatile.
              </p>
              <p className={styles.price}>$170</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Bordeaux, St. Emilion Ch. Teyssier Grand Cru
              </p>
              <p className={styles.description}>
                Opulent, round, and full. Black currants, herbs, and spice.
                Predominantly Merlot with Cabernet Sauvignon. Great critic
                ratings, averaging 90 points.
              </p>
              <p className={styles.price}>$57</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Bordeaux, St. Estephe, Chateau De Pez
              </p>
              <p className={styles.description}>
                Created in the 15th century, Chateau de Pez is the oldest
                Domaine in Saint Estèphe. Deeply colored and concentrated.
                Cabernet dominant. 49% Cabernet Sauvignon, 49% Merlot, 1% Petit
                Verdot, 1% Cabernet Franc.
              </p>
              <p className={styles.price}>$98</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Bordeaux, Fleur de Pedesclaux Pauillac, Chateau Pedesclaux
              </p>
              <p className={styles.description}>
                A sumptuous bouquet filled with sweet spice, wood, and dark
                brambly fruit, this Pauillac has a wonderfully creamy body and
                mouthfeel.
              </p>
              <p className={styles.price}>$75</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Bordeaux, Pauillac de Chateau Latour
              </p>
              <p className={styles.description}>
                A gorgeous Pauillac nose of blackcurrants, graphite, tobacco,
                and damp earth. Rich, medium to full-bodied, and beautifully
                textured with ultra-fine tannins that are ever so polished and
                give length and energy to the wine. 75% Cabernet, 20% Merlot,
                Petit Verdot, Cabernet Franc.
              </p>
              <p className={styles.price}>$170</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Loire, Pouilly-Fumé Cuvée Kriotine, Domaine Francis Blanchet
              </p>
              <p className={styles.description}>
                100% Sauvignon Blanc from the flinty soil of the Loire. Vibrant
                citrus, clean mineral-driven finish. Great with smoked meats,
                seafood, and cream sauces.
              </p>
              <p className={styles.price}>$55</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Loire, Sancerre, Reverdy Et Fils "Reine Blanche"
              </p>
              <p className={styles.description}>
                Elegant Sauvignon Blanc with crisp acidity and minerality,
                classic with shellfish and cream dishes.
              </p>
              <p className={styles.price}>$59</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Burgundy, Pouilly-Fuissé, Nicolas Potel
              </p>
              <p className={styles.description}>
                Crisp and lively with the aroma of roasted nuts, grilled
                pineapple, and a hint of matchstick. The flavor is supple,
                dry-yet-fruity medium body, with the taste of tangy green apple,
                chalk, and melon.
              </p>
              <p className={styles.price}>$78</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Burgundy, Auxey Duresses Domaine LaFouge
              </p>
              <p className={styles.description}>
                Perched in the western uplands alongside the famous
                Chardonnay-producing village of Meursault. Jean & Gilles Lafouge
                are the 6th generation of winemakers to run this small family
                Domaine, which is regularly cited as one of the top domaines of
                the appellation. Take a chance on me!
              </p>
              <p className={styles.price}>$92</p>
            </article>
            <article className="items">
              <p className={styles.food}>Burgundy, Meursault, Albert Bichot</p>
              <p className={styles.description}>
                Chardonnay with notes of candied lemon, almonds, white flowers
                and freshly baked bread.
              </p>
              <p className={styles.price}>$120</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Burgundy, Domaine Clos De La Chapelle Sous Freitelle
                Pernand-Vergelesses 1 Cru
              </p>
              <p className={styles.description}>
                100% Chardonnay, buttery and complex. The only American-owned
                Domaine in Burgundy and by KC native Mark McConnell.
              </p>
              <p className={styles.price}>$105</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Burgundy, Chassagne-Montrachet, Bouard-Bonnefoy
              </p>
              <p className={styles.description}>
                Chardonnay with classic flavors of yellow plums, mountain spring
                water and a touch of red berry fruit.
              </p>
              <p className={styles.price}>$165</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Chablis, Dominique & Romain Collet Chablist Grand Cru Valmur
                2021
              </p>
              <p className={styles.description}>
                Certified organic Chardonnay. Has depth and aromatic generosity,
                great minerality with a touch of floral and fruity elements.
              </p>
              <p className={styles.price}>$125</p>
            </article>
          </section>

          <section>
            <hr />
            <h3>Les Vins Roses</h3>
            <article className="items">
              <p className={styles.food}>Tavel Rosé, Chateau De Trinquevedel</p>
              <p className={styles.description}>
                Trinquevedel's Tavel is reminiscent of the divine freshness of a
                wild-harvested summer strawberry. Like the berries you might
                want to spoon atop a heaping pile of barely sweetened whipped
                cream, this rosé will be the star of, and finishing touch to,
                any meal.
              </p>
              <p className={styles.price}>$48</p>
            </article>
          </section>

          <section>
            <hr />
            <h3>Les Vins Rouges</h3>
            <article className="items">
              <p className={styles.food}>
                Burgundy, Nicolas Potel Bourgogne Rouge
              </p>
              <p className={styles.description}>
                Maison Nicolas Potel has built its international reputation by
                making Pinot Noir from the most beautiful vineyards of Burgundy.
              </p>
              <p className={styles.price}>$44</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Burgundy, Château De La Maltroye Bourgogne Rouge
              </p>
              <p className={styles.description}>
                One of the heralded addresses of Chassagne, the Domaine itself
                was built in the 18th century on top of a 400-year-old cellar,
                still in use today. This lovely Bourgogne Rouge shows expressive
                red fruits, liquid minerals, tar, red flowers, and a savory
                note. The palate is very dense and balanced with tons of dry
                extract and complex minerals kept in check by wonderfully
                integrated acidity.
              </p>
              <p className={styles.price}>$65</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Burgundy, Morey Saint Denis, Vielles Vignes Domaine Stephane
                Magnien
              </p>
              <p className={styles.description}>
                Rich full color, lush notes of raspberry and black cherry.
              </p>
              <p className={styles.price}>$92</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Burgundy, Pommard Domaine Germain Pere et Fils
              </p>
              <p className={styles.description}>
                100% Pinot Noir. This ruby colored wine has good mouthfeel with
                lithe body of tart cherry and strawberry balanced by acid.
              </p>
              <p className={styles.price}>$98</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Burgundy, Gevrey-Chambertin Domaine René Leclerc 'Clos Prieur'
                1Cru
              </p>
              <p className={styles.description}>
                Characteristic Gevrey are robust and powerful but at the same
                time, velvety and expressive. Black fruit, black liquorice and
                chocolate come into play. This little single vineyard offering
                tends to give very aromatic and charming red berries.
              </p>
              <p className={styles.price}>$112</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Burgundy, Volnay Bouzereau 1er "Les Aussy"
              </p>
              <p className={styles.description}>
                Fragrant on the nose with dark cherry and violet scents,
                well-delineated and just very Volnay in style. The palate is
                medium-bodied with crunchy red and black fruit.
              </p>
              <p className={styles.price}>$115</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Burgundy, Volnay 1er Cru Taillepieds, Domaine Clos De La
                Chapelle
              </p>
              <p className={styles.description}>
                A deft application of wood sets off ripe and fresh aromas of
                black berry liqueur and a beautiful array of spice elements with
                minerality and structure with a long finish.
              </p>
              <p className={styles.price}>$145</p>
            </article>
            <article className="items">
              <p className={styles.food}>Beaujolais, Morgan, Marcel Lapierre</p>
              <p className={styles.description}>
                100% Gamay, this combination of old vines, exceptional terroir
                and skilled winemaking have created pure velvet, a Lapierre
                trademark. Substance, flesh, and serious density are delivered
                with total finesse and seductiveness.
              </p>
              <p className={styles.price}>$62</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Bordeaux, Haut-Medoc, Chateau Beaumont
              </p>
              <p className={styles.description}>
                Great deep black fruits lead through to a lovely finish. Aromas
                of dark chocolate, blueberry, cassis, nutmeg, cinnamon, oak, and
                smoke. A delightful Cru Bourgeois Superieur. Impressive
              </p>
              <p className={styles.price}>$40</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Bordeaux, Medoc, Chateau Grand Bouchon
              </p>
              <p className={styles.description}>
                A mix of black fruits (black current, strawberry, blackberry),
                toast, and oak. Complex. Cabernet Sauvignon and Cabernet Franc
              </p>
              <p className={styles.price}>$40</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Bordeaux, Margaux Chateau Prieure Lichine
              </p>
              <p className={styles.description}>
                Floral and beautiful with blackberry and blackcurrant aromas.
                This is a classic 4th growth Chateau. Highly rated. 65%
                Cabernet, 30% Merlot, 5% Petit Verdot.
              </p>
              <p className={styles.price}>$125</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Bordeaux, Margaux Chateau D'Angludet
              </p>
              <p className={styles.description}>
                Delicate, restrained herbal savoriness, red cherries and fresh
                orange zest on the nose. Lightly intense on the palate with some
                ripe fruit sweetness, fine tannins, minerals, accessible and
                versatile.
              </p>
              <p className={styles.price}>$170</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Bordeaux, St. Emilion Ch. Teyssier Grand Cru
              </p>
              <p className={styles.description}>
                Opulent, round, and full. Black currants, herbs, and spice.
                Predominantly Merlot with Cabernet Sauvignon. Great critic
                ratings, averaging 90 points.
              </p>
              <p className={styles.price}>$57</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Bordeaux, St. Estephe, Chateau De Pez
              </p>
              <p className={styles.description}>
                Created in the 15th century, Chateau de Pez is the oldest
                Domaine in Saint Estèphe. Deeply colored and concentrated.
                Cabernet dominant. 49% Cabernet Sauvignon, 49% Merlot, 1% Petit
                Verdot, 1% Cabernet Franc.
              </p>
              <p className={styles.price}>$98</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Bordeaux, Fleur de Pedesclaux Pauillac, Chateau Pedesclaux
              </p>
              <p className={styles.description}>
                A sumptuous bouquet filled with sweet spice, wood, and dark
                brambly fruit, this Pauillac has a wonderfully creamy body and
                mouthfeel.
              </p>
              <p className={styles.price}>$75</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Bordeaux, Pauillac de Chateau Latour
              </p>
              <p className={styles.description}>
                A gorgeous Pauillac nose of blackcurrants, graphite, tobacco,
                and damp earth. Rich, medium to full-bodied, and beautifully
                textured with ultra-fine tannins that are ever so polished and
                give length and energy to the wine. 75% Cabernet, 20% Merlot,
                Petit Verdot, Cabernet Franc.
              </p>
              <p className={styles.price}>$170</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Bordeaux, St. Julien, Chateau Gloria
              </p>
              <p className={styles.description}>
                One of the better-known Crus Bourgeois of the Medoc, Gloria is
                made up of holdings of classified Crus still at reasonable
                prices. Black fruits, cedar. Full and plush. Cabernet Sauvignon,
                Merlot, Cabernet Franc, Petit Verdot.
              </p>
              <p className={styles.price}>$95</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Bordeaux, Pomerol Espirit de Clocher
              </p>
              <p className={styles.description}>
                Dark fruit, tobacco, chocolate, and earth. This wine is rich,
                full, deep and velvety 70% Merlot, 30% Cabernet Franc.
              </p>
              <p className={styles.price}>$105</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Bordeaux, Chateau Ducru - Beaucaillou, Saint-Julien (2016)
              </p>
              <p className={styles.description}>
                From the genius of Bruno Borie, this legendary wine from Saint
                Julian is a blend of 85% Cabernet Sauvignon, 15% Merlot. Aged in
                new oak. Exquisite bouquet of cassis, espresso, camphor,
                violets, toasty oak, and graphite. Full-bodied, layered texture,
                plenty of fruit with a very long finish. 100 points Jeb Dunnuck.
                A true collector's wine primed to drink right now!
              </p>
              <p className={styles.price}>$500</p>
            </article>
            <article className="items">
              <p className={styles.food}>Loire, Chinon, Les Rosettes</p>
              <p className={styles.description}>
                Ah, Chinon! Here Cabernet Franc shines, expressing sumptuous
                fruit, savory spice aromas and polished tannins.
              </p>
              <p className={styles.price}>$42</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Languedoc, Gerard Bertrand Chateau L'Hospitalet, La Clape
              </p>
              <p className={styles.description}>
                Syrah, Grenache, Mourvèdre. Loaded with peppery blueberries and
                blackberries. Full-bodied, rich, and concentrated. If you like
                California Cabs, you'll be won over by this wine. Has all the
                juice!
              </p>
              <p className={styles.price}>$65</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Rhone, Vacqueyras Domaine Le Sang Des Cailloux
              </p>
              <p className={styles.description}>
                This old-vines bottling is all about smoky garrigue, dense black
                fruit, taut leather, chewy tannins, and stone. 70% Grenache, 20%
                Syrah, 10% Mourvèdre & Cinsault.
              </p>
              <p className={styles.price}>$55</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Rhone, Vinsobres, Chateau De Rouanne
              </p>
              <p className={styles.description}>
                Intriguing mix of raspberry, violet, licorice, peony, black
                pepper and gingerbread. Greatly textured with prominent
                saltiness and length in the finish. 50% Grenache, 40% Syrah, 10%
                Mourvèdre
              </p>
              <p className={styles.price}>$58</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Rhone, St. Joseph, JL Chave, "Offerus"
              </p>
              <p className={styles.description}>
                Primarily estate fruit with outside components. This has an
                array of dark cherries and spiced dark plums, as well as a
                fresh, vibrant, and plush core wrapped in crisp yet silky
                tannins.
              </p>
              <p className={styles.price}>$68</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Rhone, Crozes-Hermitage, Alain Graillot
              </p>
              <p className={styles.description}>
                Atypically big, rich and velvety, it delivers rolling waves of
                ripe black cherries, tinged with understated herbal notes and a
                long, luxuriously textured finish.
              </p>
              <p className={styles.price}>$76</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Rhone, Gigondas Pallieres 'Les Racine'
              </p>
              <p className={styles.description}>
                Domaine Les Pallières is undeniably one of the greatest,
                longest-running properties of the Southern Rhône— outside the
                village of Gigondas. Rich and intense with dark chewy mineral
                fruit. 50% Grenache, Mourvèdre and Syrah complete.
              </p>
              <p className={styles.price}>$79</p>
            </article>
            <article className="items">
              <p className={styles.food}>Rhone, Arcane Le Fou, Xavier Vignon</p>
              <p className={styles.description}>
                This winemaker cut his teeth in Champagne - Le Fou is a CDP
                inspired blend of five vintages from the most outstanding of
                recent years. RP awarded 96 Points. “No hard edges, silky
                tannins and a big finish.” With a name like Le Fou, how could we
                not love this!
              </p>
              <p className={styles.price}>$98</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Rhone, Domaine Tempier Bandol 'Lulu & Lucien'
              </p>
              <p className={styles.description}>
                Beneath the dark fruit, there is an intense depth of flavor,
                energy, enticing Provençal aromatics - it is never tamed, but
                pairs well with red meat. 75% Mourvèdre, 14% Grenache, 9%
                Cinsault, 2% Carignan
              </p>
              <p className={styles.price}>$105</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Rhone, Chateauneuf-Du-Pape, L'Oratoire
              </p>
              <p className={styles.description}>
                A long-time staff favorite. Grenache, Syrah, Cinsault, Mourvèdre
              </p>
              <p className={styles.price}>$120</p>
            </article>
            <article className="items">
              <p className={styles.food}>Rhone, Cornas, Domaine Alain Voge</p>
              <p className={styles.description}>
                Cornas "Les Vieilles Vignes" comes from Syrah vineyards, more
                than 60 years old. Inky in color, classic nose of plums, Asian
                pears, sandalwood and iron. Medium to full bodied with finesse
                and great length.
              </p>
              <p className={styles.price}>$125</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Rhone, Chateauneuf-Du-Pape Clos Saint-Jean La Combe Des Fous
              </p>
              <p className={styles.description}>
                Grenache, Syrah, Cinsault, Vaccarèse. JD 100 Points. Beautiful
                full bodied aromas of ripe black raspberries and violets, ground
                pepper, lavender and herbs de Provence. Sustainable farming. The
                name translates as 'valley of the fools.'' Don't be foolish and
                order this wine. It is special.
              </p>
              <p className={styles.price}>$185</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Rhone, Hermitage, M. Chapoutier Monier De La Sizeranne
              </p>
              <p className={styles.description}>
                One of the smallest and most important Syrah regions of northern
                Rhone, Hermitage is practically one single south-facing slope of
                crushed granite, thinly covered with varied, yet well-charted
                soil types. Taste of raspberry, black currents. Highly rated.
                100% Syrah.
              </p>
              <p className={styles.price}>$250</p>
            </article>
            <article className="items">
              <p className={styles.food}>
                Rhone, L'Hermitage Rouge, Jean Louis Chave
              </p>
              <p className={styles.description}>
                A very special and limited release from one of the oldest
                wine-making families on this beautiful hill.
              </p>
              <p className={styles.price}>$450</p>
            </article>
          </section>
        </section>
      </div>
    </>
  );
};

export default WineMenu;
