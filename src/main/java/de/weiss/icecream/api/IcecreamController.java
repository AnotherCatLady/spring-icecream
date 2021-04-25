package de.weiss.icecream.api;

import de.weiss.icecream.database.IcecreamRepository;
import de.weiss.icecream.database.entity.Icecream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@Service
@RequestMapping(path = "/icecream")
public class IcecreamController {

  @Autowired
  private IcecreamRepository icecreamRepository;

  @CrossOrigin(origins = "*")
  @GetMapping
  public @ResponseBody
  Iterable<Icecream> getAllIcecream() {
    return icecreamRepository.findAll();
  }

  @CrossOrigin(origins = "*")
  @GetMapping("/{id}")
  public @ResponseBody
  Icecream getIcecream(@PathVariable Integer id) {
    return icecreamRepository.findById(id).get();
  }

  @CrossOrigin(origins = "*")
  @PutMapping
  public @ResponseBody
  Icecream addIcecream(
      @RequestBody Icecream icecream) {
    return icecreamRepository.save(icecream);
  }
}
