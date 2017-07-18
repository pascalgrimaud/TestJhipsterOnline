package io.github.pascalgrimaud.testjhipsteronline.service;

import io.github.pascalgrimaud.testjhipsteronline.AbstractCassandraTest;
import io.github.pascalgrimaud.testjhipsteronline.TestJhipsterOnlineApp;
import io.github.pascalgrimaud.testjhipsteronline.domain.User;
import io.github.pascalgrimaud.testjhipsteronline.config.Constants;
import io.github.pascalgrimaud.testjhipsteronline.repository.UserRepository;
import io.github.pascalgrimaud.testjhipsteronline.service.dto.UserDTO;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;


import java.time.Instant;
import java.util.List;

import static org.assertj.core.api.Assertions.*;

/**
 * Test class for the UserResource REST controller.
 *
 * @see UserService
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = TestJhipsterOnlineApp.class)
public class UserServiceIntTest extends AbstractCassandraTest {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @Test
    public void assertThatAnonymousUserIsNotGet() {
        final List<UserDTO> allManagedUsers = userService.getAllManagedUsers();
        assertThat(allManagedUsers.stream()
            .noneMatch(user -> Constants.ANONYMOUS_USER.equals(user.getLogin())))
            .isTrue();
    }
}
