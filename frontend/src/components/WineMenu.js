import React from "react";
import "../styles/winemenu.css";
import Navbar from "./Navbar";

const WineMenu = () => {
  return (
    <>
      <Navbar />
      <h1>
        Le Fou Frog <br />
        La Carte des Vins
      </h1>
      <p>
        All of the wines offered at Le Fou Frog <br />
        are imported from France and carefully chosen to complement our cuisine{" "}
        <br />
        in order to bring our guests a truly French gastronomic experience.
      </p>
      <div className="winelist">
        <section>
          <h3>Vins de la Maison - Blancs & Roses</h3>
          <article className="item">
            <p className="food">Arrogant Frog</p>
            <p className="description">Chardonnay</p>
            <p className="price">8/28</p>
          </article>
          <article className="item">
            <p className="food">La Vielle Ferme</p>
            <p className="description">Rosé</p>
            <p className="price">8/28</p>
          </article>
          <article className="item">
            <p className="food">La Petite Perriere</p>
            <p className="description">Sauvignon Blanc</p>
            <p className="price">8/28</p>
          </article>
          <article className="item">
            <p className="food">Jérémie Huchet 'Chauvinière'</p>
            <p className="description">Muscadet</p>
            <p className="price">9/32</p>
          </article>
          <article className="item">
            <p className="food">Chateau Lamothe</p>
            <p className="description">Bordeaux Blanc</p>
            <p className="price">10/36</p>
          </article>
          <article className="item">
            <p className="food">Heinz Eifel</p>
            <p className="description">Riesling</p>
            <p className="price">10/36</p>
          </article>
          <article className="item">
            <p className="food">Keuntz Bas</p>
            <p className="description">White Blend Alsace</p>
            <p className="price">11/40</p>
          </article>
          <article className="item">
            <p className="food">Les Lys</p>
            <p className="description">Vouvray</p>
            <p className="price">11/40</p>
          </article>
          <article className="item">
            <p className="food">Guigal</p>
            <p className="description">Cotes Du Rhone Blanc</p>
            <p className="price">11/40</p>
          </article>
          <article className="item">
            <p className="food">LaRochette</p>
            <p className="description">Macon Fuissé Chardonnay</p>
            <p className="price">12/44</p>
          </article>
          <article className="item">
            <p className="food">Rosé Du Jour</p>
            <p className="price">12/44</p>
          </article>
          <article className="item">
            <p className="food">Giesen (Non-Alcoholic)</p>
            <p className="description">Sauvignon Blanc</p>
            <p className="price">12/44</p>
          </article>
        </section>
        <section>
          <hr />
          <h3>Vins de la Maison - Rouges</h3>
          <article className="item">
            <p className="food">Maison Nicolas</p>
            <p className="description">Merlot</p>
            <p className="price">8/28</p>
          </article>
          <article className="item">
            <p className="food">Domaine De Cristia</p>
            <p className="description">Grenache</p>
            <p className="price">10/36</p>
          </article>
          <article className="item">
            <p className="food">St. Cosme Little James' Basket Press</p>
            <p className="description">Grenache</p>
            <p className="price">11/40</p>
          </article>
          <article className="item">
            <p className="food">Solis</p>
            <p className="description">Malbec Cahors</p>
            <p className="price">12/44</p>
          </article>
          <article className="item">
            <p className="food">
              Domaine Les Gryphées Cuvée Centaire Les Balmes
            </p>
            <p className="description">Beaujolais</p>
            <p className="price">12/44</p>
          </article>
          <article className="item">
            <p className="food">Château Haut-La-Péreyre</p>
            <p className="description">Bordeaux Supérieur</p>
            <p className="price">13/48</p>
          </article>
          <article className="item">
            <p className="food">Delas St. Esprit Côtes Du Rhône</p>
            <p className="price">13/48</p>
          </article>
          <article className="item">
            <p className="food">Bichot Horizon</p>
            <p className="description">Pinot Noir</p>
            <p className="price">13/48</p>
          </article>
          <article className="item">
            <p className="food">Barrail</p>
            <p className="description">Medoc Bordeaux Rouge</p>
            <p className="price">13/48</p>
          </article>
          <hr />
          <h3>Champagne</h3>
          <article className="item">
            <p className="food">Saint Hilaire Brut</p>
            <p className="description">
              The original sparkling wine of France.
            </p>
            <p className="price">10/45</p>
          </article>
          <article className="item">
            <p className="food">François Montand, Brut NV</p>
            <p className="description">
              A great bubbly at a great price. Toasty and creamy.
            </p>
            <p className="price">12/55</p>
          </article>
          <article className="item">
            <p className="food">Charles Bove "Tourraine" Rosé NV</p>
            <p className="description">
              Cabernet Franc and Gamay. Pretty nose of strawberry and ripe
              peach.
            </p>
            <p className="price">13/60</p>
          </article>
          <article className="item">
            <p className="food">Serena Brachetto D'Acqui</p>
            <p className="description">Sweet, fruity frizzante.</p>
            <p className="price">8/35</p>
          </article>
          <article className="item">
            <p className="food">Champagne, Legras & Haas Intuition Brut NV</p>
            <p className="description">
              Growers Champagne. Elegant with hints of elderflower, ripe
              apricot, salted almond, and graphite.
            </p>
            <p className="price">$70</p>
          </article>
          <article className="item">
            <p className="food">Champagne, Philippe Prié Brut Rosé</p>
            <p className="description">
              This Growers Brut Rosé is a flat-out delicious Champagne with a
              deep pink color. It bursts open with pretty aromas of freshly
              sliced strawberries, rose petal, cherry blossom, and hints of
              brioche.
            </p>
            <p className="price">$85</p>
          </article>
          <article className="item">
            <p className="food">G. Bertrand Ballerine Brut Etoilé Rosé NV</p>
            <p className="description">
              A true staff favorite, this delicate pale rosé is deeply aromatic,
              with tiny bubbles, it tastes like toasted strawberries and cream.
              “Every time a cork pops, a dancer gets a job” - B.R.
            </p>
            <p className="price">$95</p>
          </article>
          <article className="item">
            <p className="food">Champagne Veuve Clicquot, Yellow Label</p>
            <p className="description">
              Classic. Superb. Even more intensity than before. Celebrate!
            </p>
            <p className="price">$110</p>
          </article>
          <article className="item">
            <p className="food">Champagne Paul Bara Rosé NV</p>
            <p className="description">
              A beautiful small production bottle of bubbles brought to you by
              the one and only Kermit Lynch.
            </p>
            <p className="price">$115</p>
          </article>
          <article className="item">
            <p className="food">Champagne, Laurent-Perrier Brut Cuvée Rosé</p>
            <p className="description">
              100% Pinot Noir from 10 different “Cru.” A Grand Champagne with
              great color and finesse. Hints of strawberry, dry with perfect
              bubbles.
            </p>
            <p className="price">$150</p>
          </article>
          <article className="item">
            <p className="food">Champagne, Laurent-Perrier Grand Siècle</p>
            <p className="description">
              Grand Siècle is the only Cuvée de Prestige based on the blend and
              not on the vintage. Grand Siècle recreates the perfect year at
              each new iteration. A blend of Chardonnay and Pinot Noir, it is
              our Pastry Chef Carter Holton’s favorite.
            </p>
            <p className="price">$350</p>
          </article>
          <article className="item">
            <p className="food">Champagne, Louis Roederer Cristal</p>
            <p className="description">Liquid Gold</p>
            <p className="price">$395</p>
          </article>
          <hr />
          <h3>Les Vins Blancs</h3>
          <section>
            <article className="item">
              <p className="food">
                Alsace, Domaine Pfister, Riesling Tradition
              </p>
              <p className="description">
                Honeyed nose with a razor sharp, saline palette and crisp, dry
                finish. Delicious, classic Alsatian Riesling
              </p>
              <p className="price">$50</p>
            </article>
            <article className="items">
              <p className="food">
                Loire, Pouilly-Fumé Cuvée Kriotine, Domaine Francis Blanchet
              </p>
              <p className="description">
                100% Sauvignon Blanc from the flinty soil of the Loire. Vibrant
                citrus, clean mineral-driven finish. Great with smoked meats,
                seafood, and cream sauces.
              </p>
              <p className="price">$55</p>
            </article>
            <article className="items">
              <p className="food">
                Loire, Sancerre, Reverdy Et Fils "Reine Blanche"
              </p>
              <p className="description">
                Elegant Sauvignon Blanc with crisp acidity and minerality,
                classic with shellfish and cream dishes.
              </p>
              <p className="price">$59</p>
            </article>
            <article className="items">
              <p className="food">Burgundy, Pouilly-Fuissé, Nicolas Potel</p>
              <p className="description">
                Crisp and lively with the aroma of roasted nuts, grilled
                pineapple, and a hint of matchstick. The flavor is supple,
                dry-yet-fruity medium body, with the taste of tangy green apple,
                chalk, and melon.
              </p>
              <p className="price">$78</p>
            </article>
            <article className="items">
              <p className="food">Burgundy, Auxey Duresses Domaine LaFouge</p>
              <p className="description">
                Perched in the western uplands alongside the famous
                Chardonnay-producing village of Meursault. Jean & Gilles Lafouge
                are the 6th generation of winemakers to run this small family
                Domaine, which is regularly cited as one of the top domaines of
                the appellation. Take a chance on me!
              </p>
              <p className="price">$92</p>
            </article>
            <article className="items">
              <p className="food">Burgundy, Meursault, Albert Bichot</p>
              <p className="description">
                Chardonnay with notes of candied lemon, almonds, white flowers
                and freshly baked bread.
              </p>
              <p className="price">$120</p>
            </article>
            <article className="items">
              <p className="food">
                Burgundy, Domaine Clos De La Chapelle Sous Freitelle
                Pernand-Vergelesses 1 Cru
              </p>
              <p className="description">
                100% Chardonnay, buttery and complex. The only American-owned
                Domaine in Burgundy and by KC native Mark McConnell.
              </p>
              <p className="price">$105</p>
            </article>
            <article className="items">
              <p className="food">
                Burgundy, Chassagne-Montrachet, Bouard-Bonnefoy
              </p>
              <p className="description">
                Chardonnay with classic flavors of yellow plums, mountain spring
                water and a touch of red berry fruit.
              </p>
              <p className="price">$165</p>
            </article>
            <article className="items">
              <p className="food">
                Chablis, Dominique & Romain Collet Chablist Grand Cru Valmur
                2021
              </p>
              <p className="description">
                Certified organic Chardonnay. Has depth and aromatic generosity,
                great minerality with a touch of floral and fruity elements.
              </p>
              <p className="price">$125</p>
            </article>
          </section>

          <section>
            <hr />
            <h3>Les Vins Roses</h3>
            <article className="items">
              <p className="food">Tavel Rosé, Chateau De Trinquevedel</p>
              <p className="description">
                Trinquevedel's Tavel is reminiscent of the divine freshness of a
                wild-harvested summer strawberry. Like the berries you might
                want to spoon atop a heaping pile of barely sweetened whipped
                cream, this rosé will be the star of, and finishing touch to,
                any meal.
              </p>
              <p className="price">$48</p>
            </article>
          </section>

          <section>
            <hr />
            <h3>Les Vins Rouges</h3>
            <article className="items">
              <p className="food">Burgundy, Nicolas Potel Bourgogne Rouge</p>
              <p className="description">
                Maison Nicolas Potel has built its international reputation by
                making Pinot Noir from the most beautiful vineyards of Burgundy.
              </p>
              <p className="price">$44</p>
            </article>
            <article className="items">
              <p className="food">
                Burgundy, Château De La Maltroye Bourgogne Rouge
              </p>
              <p className="description">
                One of the heralded addresses of Chassagne, the Domaine itself
                was built in the 18th century on top of a 400-year-old cellar,
                still in use today. This lovely Bourgogne Rouge shows expressive
                red fruits, liquid minerals, tar, red flowers, and a savory
                note. The palate is very dense and balanced with tons of dry
                extract and complex minerals kept in check by wonderfully
                integrated acidity.
              </p>
              <p className="price">$65</p>
            </article>
            <article className="items">
              <p className="food">
                Burgundy, Morey Saint Denis, Vielles Vignes Domaine Stephane
                Magnien
              </p>
              <p className="description">
                Rich full color, lush notes of raspberry and black cherry.
              </p>
              <p className="price">$92</p>
            </article>
            <article className="items">
              <p className="food">
                Burgundy, Pommard Domaine Germain Pere et Fils
              </p>
              <p className="description">
                100% Pinot Noir. This ruby colored wine has good mouthfeel with
                lithe body of tart cherry and strawberry balanced by acid.
              </p>
              <p className="price">$98</p>
            </article>
            <article className="items">
              <p className="food">
                Burgundy, Gevrey-Chambertin Domaine René Leclerc 'Clos Prieur'
                1Cru
              </p>
              <p className="description">
                Characteristic Gevrey are robust and powerful but at the same
                time, velvety and expressive. Black fruit, black liquorice and
                chocolate come into play. This little single vineyard offering
                tends to give very aromatic and charming red berries.
              </p>
              <p className="price">$112</p>
            </article>
            <article className="items">
              <p className="food">Burgundy, Volnay Bouzereau 1er "Les Aussy"</p>
              <p className="description">
                Fragrant on the nose with dark cherry and violet scents,
                well-delineated and just very Volnay in style. The palate is
                medium-bodied with crunchy red and black fruit.
              </p>
              <p className="price">$115</p>
            </article>
            <article className="items">
              <p className="food">
                Burgundy, Volnay 1er Cru Taillepieds, Domaine Clos De La
                Chapelle
              </p>
              <p className="description">
                A deft application of wood sets off ripe and fresh aromas of
                black berry liqueur and a beautiful array of spice elements with
                minerality and structure with a long finish.
              </p>
              <p className="price">$145</p>
            </article>
            <article className="items">
              <p className="food">Beaujolais, Morgan, Marcel Lapierre</p>
              <p className="description">
                100% Gamay, this combination of old vines, exceptional terroir
                and skilled winemaking have created pure velvet, a Lapierre
                trademark. Substance, flesh, and serious density are delivered
                with total finesse and seductiveness.
              </p>
              <p className="price">$62</p>
            </article>
            <article className="items">
              <p className="food">Bordeaux, Haut-Medoc, Chateau Beaumont</p>
              <p className="description">
                Great deep black fruits lead through to a lovely finish. Aromas
                of dark chocolate, blueberry, cassis, nutmeg, cinnamon, oak, and
                smoke. A delightful Cru Bourgeois Superieur. Impressive
              </p>
              <p className="price">$40</p>
            </article>
            <article className="items">
              <p className="food">Bordeaux, Medoc, Chateau Grand Bouchon</p>
              <p className="description">
                A mix of black fruits (black current, strawberry, blackberry),
                toast, and oak. Complex. Cabernet Sauvignon and Cabernet Franc
              </p>
              <p className="price">$40</p>
            </article>
            <article className="items">
              <p className="food">Bordeaux, Margaux Chateau Prieure Lichine</p>
              <p className="description">
                Floral and beautiful with blackberry and blackcurrant aromas.
                This is a classic 4th growth Chateau. Highly rated. 65%
                Cabernet, 30% Merlot, 5% Petit Verdot.
              </p>
              <p className="price">$125</p>
            </article>
            <article className="items">
              <p className="food">Bordeaux, Margaux Chateau D'Angludet</p>
              <p className="description">
                Delicate, restrained herbal savoriness, red cherries and fresh
                orange zest on the nose. Lightly intense on the palate with some
                ripe fruit sweetness, fine tannins, minerals, accessible and
                versatile.
              </p>
              <p className="price">$170</p>
            </article>
            <article className="items">
              <p className="food">
                Bordeaux, St. Emilion Ch. Teyssier Grand Cru
              </p>
              <p className="description">
                Opulent, round, and full. Black currants, herbs, and spice.
                Predominantly Merlot with Cabernet Sauvignon. Great critic
                ratings, averaging 90 points.
              </p>
              <p className="price">$57</p>
            </article>
            <article className="items">
              <p className="food">Bordeaux, St. Estephe, Chateau De Pez</p>
              <p className="description">
                Created in the 15th century, Chateau de Pez is the oldest
                Domaine in Saint Estèphe. Deeply colored and concentrated.
                Cabernet dominant. 49% Cabernet Sauvignon, 49% Merlot, 1% Petit
                Verdot, 1% Cabernet Franc.
              </p>
              <p className="price">$98</p>
            </article>
            <article className="items">
              <p className="food">
                Bordeaux, Fleur de Pedesclaux Pauillac, Chateau Pedesclaux
              </p>
              <p className="description">
                A sumptuous bouquet filled with sweet spice, wood, and dark
                brambly fruit, this Pauillac has a wonderfully creamy body and
                mouthfeel.
              </p>
              <p className="price">$75</p>
            </article>
            <article className="items">
              <p className="food">Bordeaux, Pauillac de Chateau Latour</p>
              <p className="description">
                A gorgeous Pauillac nose of blackcurrants, graphite, tobacco,
                and damp earth. Rich, medium to full-bodied, and beautifully
                textured with ultra-fine tannins that are ever so polished and
                give length and energy to the wine. 75% Cabernet, 20% Merlot,
                Petit Verdot, Cabernet Franc.
              </p>
              <p className="price">$170</p>
            </article>
            <article className="items">
              <p className="food">
                Loire, Pouilly-Fumé Cuvée Kriotine, Domaine Francis Blanchet
              </p>
              <p className="description">
                100% Sauvignon Blanc from the flinty soil of the Loire. Vibrant
                citrus, clean mineral-driven finish. Great with smoked meats,
                seafood, and cream sauces.
              </p>
              <p className="price">$55</p>
            </article>
            <article className="items">
              <p className="food">
                Loire, Sancerre, Reverdy Et Fils "Reine Blanche"
              </p>
              <p className="description">
                Elegant Sauvignon Blanc with crisp acidity and minerality,
                classic with shellfish and cream dishes.
              </p>
              <p className="price">$59</p>
            </article>
            <article className="items">
              <p className="food">Burgundy, Pouilly-Fuissé, Nicolas Potel</p>
              <p className="description">
                Crisp and lively with the aroma of roasted nuts, grilled
                pineapple, and a hint of matchstick. The flavor is supple,
                dry-yet-fruity medium body, with the taste of tangy green apple,
                chalk, and melon.
              </p>
              <p className="price">$78</p>
            </article>
            <article className="items">
              <p className="food">Burgundy, Auxey Duresses Domaine LaFouge</p>
              <p className="description">
                Perched in the western uplands alongside the famous
                Chardonnay-producing village of Meursault. Jean & Gilles Lafouge
                are the 6th generation of winemakers to run this small family
                Domaine, which is regularly cited as one of the top domaines of
                the appellation. Take a chance on me!
              </p>
              <p className="price">$92</p>
            </article>
            <article className="items">
              <p className="food">Burgundy, Meursault, Albert Bichot</p>
              <p className="description">
                Chardonnay with notes of candied lemon, almonds, white flowers
                and freshly baked bread.
              </p>
              <p className="price">$120</p>
            </article>
            <article className="items">
              <p className="food">
                Burgundy, Domaine Clos De La Chapelle Sous Freitelle
                Pernand-Vergelesses 1 Cru
              </p>
              <p className="description">
                100% Chardonnay, buttery and complex. The only American-owned
                Domaine in Burgundy and by KC native Mark McConnell.
              </p>
              <p className="price">$105</p>
            </article>
            <article className="items">
              <p className="food">
                Burgundy, Chassagne-Montrachet, Bouard-Bonnefoy
              </p>
              <p className="description">
                Chardonnay with classic flavors of yellow plums, mountain spring
                water and a touch of red berry fruit.
              </p>
              <p className="price">$165</p>
            </article>
            <article className="items">
              <p className="food">
                Chablis, Dominique & Romain Collet Chablist Grand Cru Valmur
                2021
              </p>
              <p className="description">
                Certified organic Chardonnay. Has depth and aromatic generosity,
                great minerality with a touch of floral and fruity elements.
              </p>
              <p className="price">$125</p>
            </article>
          </section>

          <section>
            <hr />
            <h3>Les Vins Roses</h3>
            <article className="items">
              <p className="food">Tavel Rosé, Chateau De Trinquevedel</p>
              <p className="description">
                Trinquevedel's Tavel is reminiscent of the divine freshness of a
                wild-harvested summer strawberry. Like the berries you might
                want to spoon atop a heaping pile of barely sweetened whipped
                cream, this rosé will be the star of, and finishing touch to,
                any meal.
              </p>
              <p className="price">$48</p>
            </article>
          </section>

          <section>
            <hr />
            <h3>Les Vins Rouges</h3>
            <article className="items">
              <p className="food">Burgundy, Nicolas Potel Bourgogne Rouge</p>
              <p className="description">
                Maison Nicolas Potel has built its international reputation by
                making Pinot Noir from the most beautiful vineyards of Burgundy.
              </p>
              <p className="price">$44</p>
            </article>
            <article className="items">
              <p className="food">
                Burgundy, Château De La Maltroye Bourgogne Rouge
              </p>
              <p className="description">
                One of the heralded addresses of Chassagne, the Domaine itself
                was built in the 18th century on top of a 400-year-old cellar,
                still in use today. This lovely Bourgogne Rouge shows expressive
                red fruits, liquid minerals, tar, red flowers, and a savory
                note. The palate is very dense and balanced with tons of dry
                extract and complex minerals kept in check by wonderfully
                integrated acidity.
              </p>
              <p className="price">$65</p>
            </article>
            <article className="items">
              <p className="food">
                Burgundy, Morey Saint Denis, Vielles Vignes Domaine Stephane
                Magnien
              </p>
              <p className="description">
                Rich full color, lush notes of raspberry and black cherry.
              </p>
              <p className="price">$92</p>
            </article>
            <article className="items">
              <p className="food">
                Burgundy, Pommard Domaine Germain Pere et Fils
              </p>
              <p className="description">
                100% Pinot Noir. This ruby colored wine has good mouthfeel with
                lithe body of tart cherry and strawberry balanced by acid.
              </p>
              <p className="price">$98</p>
            </article>
            <article className="items">
              <p className="food">
                Burgundy, Gevrey-Chambertin Domaine René Leclerc 'Clos Prieur'
                1Cru
              </p>
              <p className="description">
                Characteristic Gevrey are robust and powerful but at the same
                time, velvety and expressive. Black fruit, black liquorice and
                chocolate come into play. This little single vineyard offering
                tends to give very aromatic and charming red berries.
              </p>
              <p className="price">$112</p>
            </article>
            <article className="items">
              <p className="food">Burgundy, Volnay Bouzereau 1er "Les Aussy"</p>
              <p className="description">
                Fragrant on the nose with dark cherry and violet scents,
                well-delineated and just very Volnay in style. The palate is
                medium-bodied with crunchy red and black fruit.
              </p>
              <p className="price">$115</p>
            </article>
            <article className="items">
              <p className="food">
                Burgundy, Volnay 1er Cru Taillepieds, Domaine Clos De La
                Chapelle
              </p>
              <p className="description">
                A deft application of wood sets off ripe and fresh aromas of
                black berry liqueur and a beautiful array of spice elements with
                minerality and structure with a long finish.
              </p>
              <p className="price">$145</p>
            </article>
            <article className="items">
              <p className="food">Beaujolais, Morgan, Marcel Lapierre</p>
              <p className="description">
                100% Gamay, this combination of old vines, exceptional terroir
                and skilled winemaking have created pure velvet, a Lapierre
                trademark. Substance, flesh, and serious density are delivered
                with total finesse and seductiveness.
              </p>
              <p className="price">$62</p>
            </article>
            <article className="items">
              <p className="food">Bordeaux, Haut-Medoc, Chateau Beaumont</p>
              <p className="description">
                Great deep black fruits lead through to a lovely finish. Aromas
                of dark chocolate, blueberry, cassis, nutmeg, cinnamon, oak, and
                smoke. A delightful Cru Bourgeois Superieur. Impressive
              </p>
              <p className="price">$40</p>
            </article>
            <article className="items">
              <p className="food">Bordeaux, Medoc, Chateau Grand Bouchon</p>
              <p className="description">
                A mix of black fruits (black current, strawberry, blackberry),
                toast, and oak. Complex. Cabernet Sauvignon and Cabernet Franc
              </p>
              <p className="price">$40</p>
            </article>
            <article className="items">
              <p className="food">Bordeaux, Margaux Chateau Prieure Lichine</p>
              <p className="description">
                Floral and beautiful with blackberry and blackcurrant aromas.
                This is a classic 4th growth Chateau. Highly rated. 65%
                Cabernet, 30% Merlot, 5% Petit Verdot.
              </p>
              <p className="price">$125</p>
            </article>
            <article className="items">
              <p className="food">Bordeaux, Margaux Chateau D'Angludet</p>
              <p className="description">
                Delicate, restrained herbal savoriness, red cherries and fresh
                orange zest on the nose. Lightly intense on the palate with some
                ripe fruit sweetness, fine tannins, minerals, accessible and
                versatile.
              </p>
              <p className="price">$170</p>
            </article>
            <article className="items">
              <p className="food">
                Bordeaux, St. Emilion Ch. Teyssier Grand Cru
              </p>
              <p className="description">
                Opulent, round, and full. Black currants, herbs, and spice.
                Predominantly Merlot with Cabernet Sauvignon. Great critic
                ratings, averaging 90 points.
              </p>
              <p className="price">$57</p>
            </article>
            <article className="items">
              <p className="food">Bordeaux, St. Estephe, Chateau De Pez</p>
              <p className="description">
                Created in the 15th century, Chateau de Pez is the oldest
                Domaine in Saint Estèphe. Deeply colored and concentrated.
                Cabernet dominant. 49% Cabernet Sauvignon, 49% Merlot, 1% Petit
                Verdot, 1% Cabernet Franc.
              </p>
              <p className="price">$98</p>
            </article>
            <article className="items">
              <p className="food">
                Bordeaux, Fleur de Pedesclaux Pauillac, Chateau Pedesclaux
              </p>
              <p className="description">
                A sumptuous bouquet filled with sweet spice, wood, and dark
                brambly fruit, this Pauillac has a wonderfully creamy body and
                mouthfeel.
              </p>
              <p className="price">$75</p>
            </article>
            <article className="items">
              <p className="food">Bordeaux, Pauillac de Chateau Latour</p>
              <p className="description">
                A gorgeous Pauillac nose of blackcurrants, graphite, tobacco,
                and damp earth. Rich, medium to full-bodied, and beautifully
                textured with ultra-fine tannins that are ever so polished and
                give length and energy to the wine. 75% Cabernet, 20% Merlot,
                Petit Verdot, Cabernet Franc.
              </p>
              <p className="price">$170</p>
            </article>
            <article className="items">
              <p className="food">Bordeaux, St. Julien, Chateau Gloria</p>
              <p className="description">
                One of the better-known Crus Bourgeois of the Medoc, Gloria is
                made up of holdings of classified Crus still at reasonable
                prices. Black fruits, cedar. Full and plush. Cabernet Sauvignon,
                Merlot, Cabernet Franc, Petit Verdot.
              </p>
              <p className="price">$95</p>
            </article>
            <article className="items">
              <p className="food">Bordeaux, Pomerol Espirit de Clocher</p>
              <p className="description">
                Dark fruit, tobacco, chocolate, and earth. This wine is rich,
                full, deep and velvety 70% Merlot, 30% Cabernet Franc.
              </p>
              <p className="price">$105</p>
            </article>
            <article className="items">
              <p className="food">
                Bordeaux, Chateau Ducru - Beaucaillou, Saint-Julien (2016)
              </p>
              <p className="description">
                From the genius of Bruno Borie, this legendary wine from Saint
                Julian is a blend of 85% Cabernet Sauvignon, 15% Merlot. Aged in
                new oak. Exquisite bouquet of cassis, espresso, camphor,
                violets, toasty oak, and graphite. Full-bodied, layered texture,
                plenty of fruit with a very long finish. 100 points Jeb Dunnuck.
                A true collector's wine primed to drink right now!
              </p>
              <p className="price">$500</p>
            </article>
            <article className="items">
              <p className="food">Loire, Chinon, Les Rosettes</p>
              <p className="description">
                Ah, Chinon! Here Cabernet Franc shines, expressing sumptuous
                fruit, savory spice aromas and polished tannins.
              </p>
              <p className="price">$42</p>
            </article>
            <article className="items">
              <p className="food">
                Languedoc, Gerard Bertrand Chateau L'Hospitalet, La Clape
              </p>
              <p className="description">
                Syrah, Grenache, Mourvèdre. Loaded with peppery blueberries and
                blackberries. Full-bodied, rich, and concentrated. If you like
                California Cabs, you'll be won over by this wine. Has all the
                juice!
              </p>
              <p className="price">$65</p>
            </article>
            <article className="items">
              <p className="food">
                Rhone, Vacqueyras Domaine Le Sang Des Cailloux
              </p>
              <p className="description">
                This old-vines bottling is all about smoky garrigue, dense black
                fruit, taut leather, chewy tannins, and stone. 70% Grenache, 20%
                Syrah, 10% Mourvèdre & Cinsault.
              </p>
              <p className="price">$55</p>
            </article>
            <article className="items">
              <p className="food">Rhone, Vinsobres, Chateau De Rouanne</p>
              <p className="description">
                Intriguing mix of raspberry, violet, licorice, peony, black
                pepper and gingerbread. Greatly textured with prominent
                saltiness and length in the finish. 50% Grenache, 40% Syrah, 10%
                Mourvèdre
              </p>
              <p className="price">$58</p>
            </article>
            <article className="items">
              <p className="food">Rhone, St. Joseph, JL Chave, "Offerus"</p>
              <p className="description">
                Primarily estate fruit with outside components. This has an
                array of dark cherries and spiced dark plums, as well as a
                fresh, vibrant, and plush core wrapped in crisp yet silky
                tannins.
              </p>
              <p className="price">$68</p>
            </article>
            <article className="items">
              <p className="food">Rhone, Crozes-Hermitage, Alain Graillot</p>
              <p className="description">
                Atypically big, rich and velvety, it delivers rolling waves of
                ripe black cherries, tinged with understated herbal notes and a
                long, luxuriously textured finish.
              </p>
              <p className="price">$76</p>
            </article>
            <article className="items">
              <p className="food">Rhone, Gigondas Pallieres 'Les Racine'</p>
              <p className="description">
                Domaine Les Pallières is undeniably one of the greatest,
                longest-running properties of the Southern Rhône— outside the
                village of Gigondas. Rich and intense with dark chewy mineral
                fruit. 50% Grenache, Mourvèdre and Syrah complete.
              </p>
              <p className="price">$79</p>
            </article>
            <article className="items">
              <p className="food">Rhone, Arcane Le Fou, Xavier Vignon</p>
              <p className="description">
                This winemaker cut his teeth in Champagne - Le Fou is a CDP
                inspired blend of five vintages from the most outstanding of
                recent years. RP awarded 96 Points. “No hard edges, silky
                tannins and a big finish.” With a name like Le Fou, how could we
                not love this!
              </p>
              <p className="price">$98</p>
            </article>
            <article className="items">
              <p className="food">
                Rhone, Domaine Tempier Bandol 'Lulu & Lucien'
              </p>
              <p className="description">
                Beneath the dark fruit, there is an intense depth of flavor,
                energy, enticing Provençal aromatics - it is never tamed, but
                pairs well with red meat. 75% Mourvèdre, 14% Grenache, 9%
                Cinsault, 2% Carignan
              </p>
              <p className="price">$105</p>
            </article>
            <article className="items">
              <p className="food">Rhone, Chateauneuf-Du-Pape, L'Oratoire</p>
              <p className="description">
                A long-time staff favorite. Grenache, Syrah, Cinsault, Mourvèdre
              </p>
              <p className="price">$120</p>
            </article>
            <article className="items">
              <p className="food">Rhone, Cornas, Domaine Alain Voge</p>
              <p className="description">
                Cornas "Les Vieilles Vignes" comes from Syrah vineyards, more
                than 60 years old. Inky in color, classic nose of plums, Asian
                pears, sandalwood and iron. Medium to full bodied with finesse
                and great length.
              </p>
              <p className="price">$125</p>
            </article>
            <article className="items">
              <p className="food">
                Rhone, Chateauneuf-Du-Pape Clos Saint-Jean La Combe Des Fous
              </p>
              <p className="description">
                Grenache, Syrah, Cinsault, Vaccarèse. JD 100 Points. Beautiful
                full bodied aromas of ripe black raspberries and violets, ground
                pepper, lavender and herbs de Provence. Sustainable farming. The
                name translates as 'valley of the fools.'' Don't be foolish and
                order this wine. It is special.
              </p>
              <p className="price">$185</p>
            </article>
            <article className="items">
              <p className="food">
                Rhone, Hermitage, M. Chapoutier Monier De La Sizeranne
              </p>
              <p className="description">
                One of the smallest and most important Syrah regions of northern
                Rhone, Hermitage is practically one single south-facing slope of
                crushed granite, thinly covered with varied, yet well-charted
                soil types. Taste of raspberry, black currents. Highly rated.
                100% Syrah.
              </p>
              <p className="price">$250</p>
            </article>
            <article className="items">
              <p className="food">Rhone, L'Hermitage Rouge, Jean Louis Chave</p>
              <p className="description">
                A very special and limited release from one of the oldest
                wine-making families on this beautiful hill.
              </p>
              <p className="price">$450</p>
            </article>
          </section>
        </section>
      </div>
    </>
  );
};

export default WineMenu;
