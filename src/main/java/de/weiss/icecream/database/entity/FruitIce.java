package de.weiss.icecream.database.entity;

import com.fasterxml.jackson.annotation.JsonTypeName;
import java.util.List;
import javax.persistence.CollectionTable;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;

@Entity
@JsonTypeName(value = "FRUIT")
public class FruitIce extends Icecream {

  private double fruitContent;

  @ElementCollection
  @CollectionTable(name = "fruits")
  private List<String> fruits;

  protected FruitIce(Integer id, String name, Integer calories, String intolerances,
      double wholesalePrice, double retailPrice, List<String> ingredients, Category category, double fruitContent,
      List<String> fruits) {
    super(id, name, calories, intolerances, wholesalePrice, retailPrice, ingredients, category);
    this.fruitContent = fruitContent;
    this.setCategory(Category.FRUIT);
    this.fruits = fruits;
  }

  public FruitIce() {
    setCategory(Category.FRUIT);
  }

  public double getFruitContent() {
    return fruitContent;
  }

  public void setFruitContent(double fruitContent) {
    this.fruitContent = fruitContent;
  }

  public List<String> getFruits() {
    return fruits;
  }

  public void setFruits(List<String> fruits) {
    this.fruits = fruits;
  }
}
