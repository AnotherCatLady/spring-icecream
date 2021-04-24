package de.weiss.icecream.database.entity;

import com.fasterxml.jackson.annotation.JsonTypeName;
import java.util.List;
import javax.persistence.Entity;

@Entity
@JsonTypeName(value = "CREAM")
public class CreamIce extends Icecream {

  private double creamContent;

  protected CreamIce(Integer id, String name, Integer calories, String intolerances,
      double wholesalePrice, double retailPrice, List<String> ingredients,
      double creamContent, Category category) {
    super(id, name, calories, intolerances, wholesalePrice, retailPrice, ingredients, category);
    setCategory(Category.CREAM);
    this.creamContent = creamContent;
  }

  public CreamIce() {
    setCategory(Category.CREAM);
  }

  public double getCreamContent() {
    return creamContent;
  }

  public void setCreamContent(double creamContent) {
    this.creamContent = creamContent;
  }
}
