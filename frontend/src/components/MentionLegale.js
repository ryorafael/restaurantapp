import React from "react";
import s from "../styles/MentionsLegales.module.css";

const MentionsLegales = () => {
  return (
    <div className={s.legalPage}>
      <h1>Mentions légales</h1>

      <h2>Éditeur du site</h2>
      <p>
        Le site <strong>Le Fou Frog</strong> est édité par :
        <br />
        Ryo Rafael
        <br />
        400 E. 5th Street. Kansas City, Missouri, USA 64114
        <br />
        Email : <a href="mailto:contact@lefoufrog.com">contact@lefoufrog.com</a>
      </p>

      <h2>Responsable de la publication</h2>
      <p>Ryo Rafael</p>

      <h2>Hébergement</h2>
      <p>
        OVH SAS
        <br />
        2 rue Kellermann, 59100 Roubaix, France
        <br />
        Site web : <a href="https://www.ovh.com">www.ovh.com</a>
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L’ensemble du contenu de ce site (textes, images, graphismes, logo,
        icônes, vidéos, logiciels) est la propriété exclusive du Fou Frog ou de
        ses partenaires, sauf mention contraire. Toute reproduction,
        représentation, modification, publication, transmission, dénaturation,
        totale ou partielle, du site ou de son contenu, par quelque procédé que
        ce soit, et sur quelque support que ce soit, est interdite sans
        autorisation écrite préalable.
      </p>

      <h2>Protection des données personnelles (RGPD)</h2>
      <p>
        Conformément au Règlement Général sur la Protection des Données (RGPD),
        l’utilisateur dispose des droits suivants concernant ses données
        personnelles :
      </p>
      <ul>
        <li>Droit d’accès et de rectification</li>
        <li>Droit à l’effacement (« droit à l’oubli »)</li>
        <li>Droit à la limitation du traitement</li>
        <li>Droit d’opposition</li>
        <li>Droit à la portabilité des données</li>
      </ul>
      <p>
        Pour exercer vos droits, vous pouvez contacter :{" "}
        <a href="mailto:contact@lefoufrog.com">contact@lefoufrog.com</a>.
      </p>
      <p>
        Les données collectées (nom, email, réservations) ne sont utilisées que
        pour la gestion des comptes et des réservations. Elles sont conservées
        uniquement pendant la durée nécessaire et ne sont en aucun cas
        transmises à des tiers sans consentement.
      </p>

      <h2>Cookies et stockage local</h2>
      <p>
        Ce site n’utilise pas de cookies publicitaires ni de suivi.
        <br />
        Un stockage local (<code>localStorage</code>) peut être utilisé
        uniquement afin de conserver certaines informations de session (par
        exemple votre jeton de connexion) pour améliorer l’expérience
        utilisateur. Vous pouvez à tout moment supprimer ces données via les
        paramètres de votre navigateur ou en vous déconnectant.
      </p>

      <h2>Limitation de responsabilité</h2>
      <p>
        Le Fou Frog s’efforce de fournir sur ce site des informations aussi
        précises que possible. Toutefois, il ne pourra être tenu responsable des
        omissions, des inexactitudes ou des carences dans la mise à jour du
        contenu, qu’elles soient de son fait ou du fait des tiers partenaires
        qui fournissent ces informations.
      </p>

      <h2>Droit applicable</h2>
      <p>
        Les présentes mentions légales sont soumises au droit français. Tout
        litige relatif à leur interprétation ou leur exécution relève des
        tribunaux compétents de Paris.
      </p>
    </div>
  );
};

export default MentionsLegales;
