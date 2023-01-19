-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : jeu. 19 jan. 2023 à 16:04
-- Version du serveur :  5.7.34
-- Version de PHP : 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `ionic_projet`
--

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `category`
--

INSERT INTO `category` (`id`, `title`) VALUES
(1, 'test'),
(4, 'Cuisine asiatique'),
(5, 'Cuisine espagnole');

-- --------------------------------------------------------

--
-- Structure de la table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `picture` varchar(255) NOT NULL,
  `video_url` varchar(255) DEFAULT NULL,
  `description` text,
  `cooktime` int(11) DEFAULT NULL,
  `preparetime` int(11) NOT NULL,
  `cost` int(11) NOT NULL,
  `nbportion` int(11) NOT NULL,
  `tools` text,
  `level` int(11) NOT NULL,
  `ingredients` text NOT NULL,
  `steps` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `products`
--

INSERT INTO `products` (`id`, `title`, `picture`, `video_url`, `description`, `cooktime`, `preparetime`, `cost`, `nbportion`, `tools`, `level`, `ingredients`, `steps`) VALUES
(2, 'Poulet basquaise', 'https://assets.afcdn.com/recipe/20161116/7224_w2000h3000c1cx1972cy3850cxb3840cyb5760.webp', 'https://www.youtube.com/embed/IAfotyhK8Q8', 'Recette poulet mijoté avec des poivrons, délicieux avec une purée maison', 80, 30, 1, 4, '-cocotte.-poele.-econome.-couteau.', 1, '-500g Poulet.-300g Poivrons.-1 boîte de concentré de tomate.-sel.', '-préparer les légumes.-faire revenir le poulet avec un peu d\'huile.-tout mettre dans une cocotte à feu doux.'),
(5, 'Poulet basquaise', 'https://assets.afcdn.com/recipe/20161116/7224_w2000h3000c1cx1972cy3850cxb3840cyb5760.webp', 'https://www.youtube.com/embed/IAfotyhK8Q8', 'Recette poulet mijoté avec des poivrons, délicieux avec une purée maison', 80, 30, 1, 4, '-cocotte.-poele.-econome.-couteau.', 1, '-500g Poulet.-300g Poivrons.-1 boîte de concentré de tomate.-sel.', '-préparer les légumes.-faire revenir le poulet avec un peu d\'huile.-tout mettre dans une cocotte à feu doux.');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
